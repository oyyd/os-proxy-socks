import manage from './manage'
import { format } from './format'

const NETWORK_SERVICE = 'Wi-Fi'

export function get() {
  return manage.get(NETWORK_SERVICE).then(output => format(output))
}

export function set(options) {
  if (typeof options !== 'object') {
    return Promise.reject(new Error('expected the argument "options" to be an object'))
  }

  const { server, port } = options

  if (!server || !port) {
    return Promise.reject(new Error('expect the "server" and "port" to be specified'))
  }

  return manage.set(NETWORK_SERVICE, server, port)
}

export function enable() {
  const res = manage.enable(NETWORK_SERVICE, 'on')
  return res
}

export function disable() {
  return manage.disable(NETWORK_SERVICE, 'off')
}

// if (module === require.main) {
//   disable()
// }
