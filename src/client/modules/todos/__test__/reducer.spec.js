import * as t from '../actions'
import { todos, visibilityFilter } from '../reducer'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: t.ADD,
        text: 'Run the tests',
        id: 0,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ], {
        type: t.ADD,
        text: 'Use Redux',
        id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1,
        },
      ], {
        type: t.ADD,
        text: 'Fix the tests',
        id: 2,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1,
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0,
        },
      ], {
        type: t.TOGGLE,
        id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ])
  })
})


describe('visibilityFilter', () => {

})
