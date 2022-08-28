#!/usr/bin/env node
import options from '@/shared/options'
import minimist from 'minimist'
import PackageDevice from '@/questions/packageManager'
import projectName from '@/questions/projectName'
import framework from '@/questions/framework'
import createQuestion from '@/questions'
import prompts from 'prompts'
import clearConsole from '@/utils/clearConsole'
import gradient from 'gradient-string'

// format file name
function formatTargetDir(targetDir) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

// create Project fn
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
    // framework
    await createQuestion(prompts, framework)
    // cancel
    console.log(options)
  } catch (cancelled) {
    console.log(cancelled.message)
    process.exit(1)
  }
}

async function createWuJieProject() {
  clearConsole()
  console.log(
    gradient('#fff', '#f16b5f')('\n📦 Welcome To Create Template for WuJie! \n')
  )
  await createProjectQuestions()
}

createWuJieProject()
