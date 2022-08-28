import { cyan, yellow } from '@/utils/log'
import createSpawnCmd from '@/utils/createSpawnCmd'
import fs = require('fs-extra')
import clearConsole from '@/utils/clearConsole'
import options from '@/shared/options'
import minimist from 'minimist'
import PackageDevice from '@/questions/packageManager'
import projectName from '@/questions/projectName'
import createQuestion from '@/questions'
import prompts from 'prompts'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const gradient = require('gradient-string')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
let startTime: number, endTime: number
export default async function () {
  clearConsole()
  console.log(
    gradient('#fff', '#f16b5f')('\n📦 Welcome To Create Template for WuJie! \n')
  )

  await createProjectQuestions()
  // 获取基础参数
  // options.name = name
  options.dest = path.resolve(process.cwd(), options.name)
  // 目录
  const dest = path.resolve(process.cwd(), options.name)
  const cmdIgnore = createSpawnCmd(dest, 'ignore')
  const cmdInherit = createSpawnCmd(dest, 'inherit')
  // 模板路径
  const templatePath = path.resolve(__dirname, `template`)

  // 开始记录用时
  startTime = new Date().getTime()
  // 拷贝基础模板文件
  await fs.copy(templatePath, dest)
  // 编译 ejs 模板文件
  yellow(`> The project template is generated in the directory: ${dest}`)
  // Git 初始化
  await cmdIgnore('git', ['init'])
  await cmdIgnore('git', ['add .'])
  await cmdIgnore('git', ['commit -m "Initialization with wujie-cli"'])
  console.log(`> Git repository initialized successfully Git`)

  // 依赖安装
  console.log(`> Automatically installing dependencies...`)
  console.log('')
  await cmdInherit(options.package, ['install'])
  endTime = new Date().getTime()
  const usageTime = (endTime - startTime) / 1000
  cyan(`> The WuJie Demo Project has been created successfully Usage time ${usageTime}s`)
  console.log('')
  cyan(`✨✨ cd ${options.name}`)
  cyan(
    options.package === 'npm'
      ? `✨✨ ${options.package} run dev`
      : `✨✨ ${options.package} dev`
  )
}
function formatTargetDir(targetDir) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

async function createProjectQuestions(): Promise<void> {
  const argv = minimist(process.argv.slice(2), { string: ['_'] })
  const cwd = process.cwd()
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
    // cancel
  } catch (cancelled) {
    console.log(cancelled.message)
    process.exit(1)
  }
}
