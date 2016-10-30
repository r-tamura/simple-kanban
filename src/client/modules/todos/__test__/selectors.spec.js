import * as t from '../actions'
import { todos } from '../reducer'
import { getVisibleTodos, ALL, COMPLETED, ACTIVE } from '../selectors'

describe('test todos\' selectors', () => {
  let state = {}

  beforeAll(() => {
    state.todos = [
      {completed: false, text: 'Learn React'},
      {completed: false, text: 'Learn Angular'},
      {completed: false, text: 'Learn Redux'},
      {completed: false, text: 'Learn XXXXX'},
    ]
  })

  it('should be all todos', () => {
    state.visibilityFilter = ALL
    expect(getVisibleTodos(state)).toEqual(state.todos)
  })

  it('should be empty list', () => {
    state.visibilityFilter = COMPLETED
    expect(getVisibleTodos(state)).toEqual([])
  })

  it('should be all todos', () => {
    state.visibilityFilter = ACTIVE
    expect(getVisibleTodos(state)).toEqual(state.todos)
  })

  it('should throw an error', () => {
    state.visibilityFilter = undefined
    expect(()=>getVisibleTodos(state)).toThrow(new Error('Unknown filter: ' + undefined))
  })

})

describe('test todos\' selectors', () => {
  let state = {}

  beforeAll(() => {
    state.todos = [
      {completed: false, text: 'Learn React'},
      {completed: true, text: 'Learn Angular'},
      {completed: true, text: 'Learn Redux'},
      {completed: false, text: 'Learn XXXXX'},
    ]
  })

  it('should be all todos', () => {
    state.visibilityFilter = ALL
    expect(getVisibleTodos(state)).toEqual(state.todos)
  })

  it('should be empty list', () => {
    state.visibilityFilter = COMPLETED
    expect(getVisibleTodos(state)).toEqual([
      {completed: true, text: 'Learn Angular'},
      {completed: true, text: 'Learn Redux'},
    ])
  })

  it('should be all todos', () => {
    state.visibilityFilter = ACTIVE
    expect(getVisibleTodos(state)).toEqual([
      {completed: false, text: 'Learn React'},
      {completed: false, text: 'Learn XXXXX'},
    ])
  })
})