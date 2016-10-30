import * as actions from '../actions'

describe('visibilityFilter actions', () => {
  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'visibilityFilter/SET',
      filter: 'active'
    })
  })
})