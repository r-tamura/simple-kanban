import * as t from '../actions'
import reducer from '../reducer'

describe('visibilityFilter test', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toBe('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(reducer(undefined, {type: t.SET, filter: 'SHOW_ACTIVE'})).toEqual('SHOW_ACTIVE')
  })
})