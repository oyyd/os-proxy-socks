const mockManageSet = jest.fn(() => Promise.resolve())

jest.mock('../manage', () => ({
  enable: mockManageSet,
}))

const { enable } = require('../index')

describe('enable', () => {
  beforeEach(() => {
    mockManageSet.mockClear()
  })

  it('should call manage.enable with "on"', (done) => {
    enable().then(() => {
      const [, state] = mockManageSet.mock.calls[0]

      expect(state).toBe('on')
      done()
    })
  })
})
