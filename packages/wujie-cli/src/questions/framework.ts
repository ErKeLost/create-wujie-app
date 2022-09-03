export default [
  {
    name: 'mainFramework',
    type: 'select',
    message:
      'What framework do you choose as your main application (选择什么框架作为你的主应用)',
    instructions: false,
    choices: [
      {
        title: 'Webpack + Vue2',
        value: 'main-vue2'
      },
      {
        title: 'Webpack + Vue2',
        value: 'main-vue3'
      },
      {
        title: 'Vite + Vue3',
        value: 'main-vite-vue'
      },
      {
        title: 'React',
        value: 'main-react'
      }
    ]
  },
  {
    name: 'subFramework',
    type: 'multiselect',
    message:
      'What framework do you choose as your sub application (选择什么框架作为你的子应用)',
    instructions: false,
    choices: [
      {
        title: 'Vite + keep-alive',
        value: 'vite'
      },
      {
        title: 'Vue2',
        value: 'vue2'
      },
      {
        title: 'Vue3',
        value: 'vue3'
      },
      {
        title: 'React16',
        value: 'react16'
      },
      {
        title: 'React17',
        value: 'react17'
      },
      {
        title: 'React18',
        value: 'react18'
      },
      { title: 'Angular', value: 'angular' }
    ]
  }
]
