#!/usr/bin/env node
import { cyan, yellow } from '@/utils/log'
import clearConsole from '@/utils/clearConsole'
import createSpawnCmd from '@/utils/createSpawnCmd'
import { ejsRender } from '@/utils/ejsRender'
import options from '@/shared/options'
import { renderTemplateFiles, mainFramework, subFramework } from '@/shared/templateFile'
import PackageDevice from '@/questions/packageManager'
import projectName from '@/questions/projectName'
import framework from '@/questions/framework'
import createQuestion from '@/questions'
import prompts from 'prompts'
import minimist from 'minimist'
import gradient from 'gradient-string'
import path from 'node:path'
import fs from 'fs-extra'

const cwd = process.cwd()
let startTime: number, endTime: number
// 格式化 framework

// format file name
function formatTargetDir(targetDir) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

// create Project fn
async function createProjectQuestions(): Promise<void> {
  const argv = minimist(process.argv.slice(2), { string: ['_'] })
  const targetDir = formatTargetDir(argv._[0])
  // 项目名
  try {
    if (targetDir === undefined) {
      await createQuestion(prompts, projectName)
    } else {
      options.name = targetDir
    }
    // 包管理器版本
    await createQuestion(prompts, PackageDevice)
    // framework
    await createQuestion(prompts, framework)
    // cancel
  } catch (cancelled) {
    console.log(cancelled.message)
    process.exit(1)
  }
}

// install deps
async function install() {
  const cmdIgnore = createSpawnCmd(options.dest, 'ignore')
  const cmdInherit = createSpawnCmd(options.dest, 'inherit')

  // 开始记录用时
  startTime = new Date().getTime()

  yellow(`> The project template is generated in the directory: ${options.dest}`)
  // Git 初始化
  await cmdIgnore('git', ['init'])
  await cmdIgnore('git', ['add .'])
  await cmdIgnore('git', ['commit -m "Initialization with wujie-cli"'])
  console.log(`> Git repository initialized successfully Git`)

  // 依赖安装
  console.log(`> Automatically installing dependencies...`)
  console.log('')
  await cmdInherit(options.package, ['install'])
  clearConsole()
  endTime = new Date().getTime()
  const usageTime = (endTime - startTime) / 1000
  cyan(`> The WuJie Demo Project has been created successfully Usage time ${usageTime}s`)
  console.log('')
  cyan(`✨✨ cd ${options.name}`)
  cyan(
    options.package === 'npm' ? `✨✨ ${options.package} run dev` : `✨✨ ${options.package} dev`
  )
}
async function renderTemplate() {
  // 模板路径
  const templatePath = path.resolve(__dirname, `template`)
  // 目录
  options.dest = path.resolve(cwd, options.name)

  await fs.copy(templatePath, options.dest)
  // 拷贝基础模板文件

  const index = mainFramework.indexOf(options.mainFramework)
  mainFramework.splice(index, 1)

  mainFramework.forEach(async (item) => {
    await fs.remove(`${options.dest}/examples/${item}`)
  })
  // console.log(mainFramework)
  const obj = {}
  options.subFramework.forEach((item) => (obj[item] = true)) // 将需要对比的数组的值作为 obj的key
  const subItems = subFramework.map((item) => {
    if (!obj[item]) {
      return item.toLowerCase()
    }
  }) // 这里是对比出来不同的元素
  // 移除undefined
  const removeSubItems = subItems.filter((item) => item !== undefined)
  console.log(removeSubItems)
  removeSubItems.forEach(async (item) => {
    await fs.remove(`${options.dest}/examples/${item}`)
  })
  // 移除主应用view 文件 vue模式
  const removeSubFramework = getArrDiff(subFramework, options.subFramework)

  if (options.mainFramework.includes('main-react')) {
    removeSubFramework.forEach(async (item) => {
      await fs.remove(`${options.dest}/examples/${options.mainFramework}/src/pages/${item}.js`)
    })
  } else {
    // console.log('remove vue file')
    removeSubFramework.forEach(async (item) => {
      await fs.remove(`${options.dest}/examples/${options.mainFramework}/src/views/${item}.vue`)
      await fs.remove(
        `${options.dest}/examples/${options.mainFramework}/src/views/${item.toLowerCase()}-sub.vue`
      )
    })
  }

  console.log(options)

  // 编译 ejs 模板文件
  console.log(renderTemplateFiles())

  await Promise.all(renderTemplateFiles().map((file) => ejsRender(file, options.name)))
}

// create project
async function createWuJieProject() {
  clearConsole()
  console.log(gradient('#fff', '#f16b5f')('\n📦 Welcome To Create Template for WuJie! \n'))
  await createProjectQuestions()
  await renderTemplate()
  await install()
}

createWuJieProject()

function getArrDiff(arr1, arr2) {
  return [...arr1, ...arr2].filter((item, index, arr) => {
    return arr.indexOf(item) === arr.lastIndexOf(item)
  })
}
