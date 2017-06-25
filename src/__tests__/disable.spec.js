const mockManageDisable = jest.fn(() => Promise.resolve())

jest.mock('../manage', () => ({
  disable: mockManageDisable,
}))

const { disable } = require('../index')

describe('disable', () => {
  beforeEach(() => {
    mockManageDisable.mockClear()
  })

  it('should call manage.disable with "off"', (done) => {
    disable().then(() => {
      const [, state] = mockManageDisable.mock.calls[0]

      expect(state).toBe('off')
      done()
    })
  })
})
