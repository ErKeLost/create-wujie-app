import options from './options'

const MAIN_PREFIX_VUE = `examples/main-vue/src`
const MAIN_PREFIX_VITE = `examples/main-vite/src`
const MAIN_PREFIX_REACT = `examples/${options.mainFramework}`


const templateFilesMap = [
  `${MAIN_PREFIX_VUE}/main.js`,
  // `${MAIN_PREFIX_VITE}/main.ts`,
  `${MAIN_PREFIX_VUE}/App.vue`,
  // `${MAIN_PREFIX_VITE}/App.vue`,
  `${MAIN_PREFIX_VUE}/router/index.js`,
  // `${MAIN_PREFIX_VITE}/router/index.ts`,
]

const mainFramework = ['main-vue', 'main-react', 'main-vite']
const subFramework = ['vue2', 'vue3', 'vite', 'angular12', 'react16', 'react17', 'react18']
export { templateFilesMap, mainFramework, subFramework }
