import program from '../../program'
import createProject from './createProject'
export default async function createCommand() {
  program
    .description('📦📦 Init wujie Project')
    .action(async () => {
      createProject()
    })
  program
    .command('create')
    .description('📦📦 Init wujie Project')
    .action(async () => {
      createProject()
    })
}

