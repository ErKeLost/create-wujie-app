interface Options {
  name?: string
  projectName?: string
  package?: 'pnpm' | 'npm' | 'yarn'
  mainFramework?: string
  subFramework?: string[]
  dist?: string
}

const options: Options = {}
export default options
