const mockManageSet = jest.fn(() => Promise.resolve())

jest.mock('../manage', () => ({
  set: mockManageSet,
}))

const { set } = require('../index')

describe('set', () => {
  const server = '127.0.0.1'
  const port = 1080

  it('should call manage.set() with the args of "server" and "port" ', (done) => {
    set({
      server,
      port,
    }).then(() => {
      const [, s, p] = mockManageSet.mock.calls[0]

      expect(s).toBe(server)
      expect(p).toBe(port)
      done()
    })
  })

  it('should throw if "options" is not an object', (done) => {
    set(server).catch((err) => {
      expect(err).toBeTruthy()
      done()
    })
  })

  it('should throw if "server" or "port" is not set', (done) => {
    set({}).catch((err) => {
      expect(err).toBeTruthy()
      done()
    })
  })
})
