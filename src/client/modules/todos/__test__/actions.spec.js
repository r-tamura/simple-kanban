import * as actions from '../actions'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: actions.ADD,
      id: 0,
      text: 'Use Redux',
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: actions.TOGGLE,
      id: 1,
    })
  })
})

