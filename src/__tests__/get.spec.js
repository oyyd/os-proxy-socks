import { get } from '../index'

describe('get', () => {
  it('should get SOCKS info', (done) => {
    get().then((info) => {
      expect(typeof info.enable).toBe('boolean')
      expect(typeof info.server).toBe('string')
      expect(typeof info.port).toBe('number')
      done()
    })
  })
})
