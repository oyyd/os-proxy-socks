import exec from './exec'

// CLI that manages network devices / services.
const executable = {
  // OS X.
  darwin: 'networksetup',
  // Windows (32-bit or 64-bit)
  win32: 'reg',
  // NOTE: We could also detect: freebsd, linux, sunos
}[process.platform]

const execArgs = {
  darwin: {
    get: '-getsocksfirewallproxy',
    set: '-setsocksfirewallproxy',
    enable: '-setsocksfirewallproxystate',
    disable: '-setsocksfirewallproxystate',
  },
  win32: {
    get: '',
    set: '',
    enable: '',
    disable: [
      'add',
      '"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings"',
      '/v ProxyEnable',
      '/t REG_DWORD',
      '/d 0',
      '/f',
    ].join(' '),
  },
}[process.platform]

const manage = (...args) => exec(executable, args)

manage.get = manage.bind(null, execArgs.get)
manage.set = manage.bind(null, execArgs.set)
manage.enable = manage.bind(null, execArgs.enable)
manage.disable = manage.bind(null, execArgs.disable)

export default manage
