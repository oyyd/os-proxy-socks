import { exec as e } from 'child_process'

const exec = (...args) => new Promise((resolve, reject) => {
  const cmd = args[0]
  const execCmd = `${cmd} ${args[1].join(' ')}`

  e(execCmd, (err, stdout) => {
    if (err) {
      reject(err)
      return
    }

    resolve(stdout)
  })
})

export default exec
