function formatDarwin(output) {
  const DARWIN_OUTPUT_FIELDS = [
    'enable',
    'server',
    'port',
  ]
  const args = output.split('\n')
  const info = {}

  DARWIN_OUTPUT_FIELDS.forEach((name, index) => {
    const str = args[index]
    const value = str.split(': ')[1]

    info[name] = value

    if (name === 'enable') {
      info[name] = info[name] !== 'No'
    } else if (name === 'port') {
      info[name] = parseInt(info[name], 10)
    }
  })

  return info
}

export const format = {
  // OS X.
  darwin: formatDarwin,
  // Windows (32-bit or 64-bit)
  // win32: 'reg',
  // NOTE: We could also detect: freebsd, linux, sunos
}[process.platform]
