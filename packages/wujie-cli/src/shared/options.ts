interface Options {
  name?: string
  projectName?: string
  package?: 'pnpm' | 'npm' | 'yarn'
  mainFramework?: string
  subFramework?: string[]
}

const options: Options = {}
export default options
