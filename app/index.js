const { BrowserWindow, remote } = require('electron')

const { commands } = remote.getCurrentWindow()

function handleChange (e) {
  commands.run(e.target.value, (err, stderr, stdout) => {
    console.log(stderr, stdout)
    e.target.value = ''
  })
}
