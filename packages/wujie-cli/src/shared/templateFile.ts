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
        `${MAIN_PREFIX_VUE}/router/index.js`,
        `${MAIN_PREFIX_VUE}/views/Multiple.vue`
      ]
    ],
    [
      'main-vite',
      [
        `${MAIN_PREFIX_VITE}/main.ts`,
        `${MAIN_PREFIX_VITE}/App.vue`,
        `${MAIN_PREFIX_VITE}/router/index.ts`,
        `${MAIN_PREFIX_VUE}/views/Multiple.vue`
      ]
    ],
    [
      'main-react',
      [
        'examples/main-react/src/pages/All.js',
        'examples/main-react/src/App.js',
        'examples/main-react/src/hostMap.js',
        'examples/main-react/src/index.js'
      ]
    ]
  ])
  const resolveSubFrameworkFiles = new Map([
    ['Vite', ['examples/vite/src/main.ts']],
    ['Vue2', ['examples/vue2/src/main.js']],
    ['Vue3', ['examples/vue3/src/router/index.js']],
    ['React16', ['examples/react16/src/index.js']],
    ['React17', ['examples/react17/src/App.js']]
  ])
  const res = options.subFramework.map((item) => {
    return resolveSubFrameworkFiles.get(item)
  })
  return [
    ...mainFrameworkMap.get(options.mainFramework),
    ...res.flat().filter((item) => item !== undefined)
  ]
}
const mainFramework = ['main-vue', 'main-react', 'main-vite']
const subFramework = ['Vue2', 'Vue3', 'Vite', 'Angular12', 'React16', 'React17', 'React18']
export { renderTemplateFiles, mainFramework, subFramework }
