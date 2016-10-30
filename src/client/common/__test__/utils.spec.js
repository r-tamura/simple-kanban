import { indexGenerator, zeroFill, formatDate } from '../utils'

describe('common utils ()', () => {
  let idGen

  beforeAll(() => {
    idGen = indexGenerator(1)
  })

  afterAll(() => {
    idGen = null
  })

  // indexGenerator
  it('should be 3', () => {
    expect((() => {
      idGen.next()
      idGen.next()
      return idGen.next().value
    })()).toBe(3)
  })

  // zerofill
  it('should be -05', () => {
    expect(zeroFill(-5, 2)).toBe('-05')
  })

  // formatDate
  it('should be 2016/10/30 05:12:07', () => {
    expect(formatDate(new Date('2016-10-30T05:12:07.000+09:00')))
      .toBe('2016/10/30 05:12:07')
  })
})