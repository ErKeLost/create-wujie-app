import options from './options'

const MAIN_PREFIX_VUE = `examples/main-vue/src`
const MAIN_PREFIX_VITE = `examples/main-vite/src`
// const MAIN_PREFIX_REACT = `examples/${options.mainFramework}`

function renderTemplateFiles() {
  const mainFrameworkMap = new Map([
    [
      'main-vue',
      [
        `${MAIN_PREFIX_VUE}/main.js`,
        `${MAIN_PREFIX_VUE}/App.vue`,
        `${MAIN_PREFIX_VUE}/router/index.js`
      ]
    ],
    [
      'main-vite',
      [
        `${MAIN_PREFIX_VITE}/main.ts`,
        `${MAIN_PREFIX_VITE}/App.vue`,
        `${MAIN_PREFIX_VITE}/router/index.ts`
      ]
    ],
    ['main-react', []]
  ])
  return [
    ...mainFrameworkMap.get(options.mainFramework),
    'examples/vue2/src/main.js',
    'examples/vue3/src/router/index.js',
    'examples/vite/src/main.ts'
  ]
}

const mainFramework = ['main-vue', 'main-react', 'main-vite']
const subFramework = ['Vue2', 'Vue3', 'Vite', 'Angular12', 'React16', 'React17', 'React18']
export { renderTemplateFiles, mainFramework, subFramework }
