import { combineReducers } from 'redux'
import { utils } from 'common'
import * as t from './actions'

const todo = utils.createReducer({}, {
  [t.ADD]: (state, action) => ({
    id: action.id,
    text: action.text,
    completed: false,
    //createdAt: new Date()
  }),
  [t.TOGGLE]: (state, action) => {
    if (state.id !== action.id) {
      return state
    }

    return {
      ...state,
      completed: !state.completed,
    }
  },
})

export const todos = utils.createReducer([], {
  [t.ADD]: (state, action) => ([
    ...state,
    todo(undefined, action),
  ]),
  [t.TOGGLE]: (state, action) => state.map(td => todo(td, action)),
})

/**
 * Reducer
 */
export const visibilityFilter = utils.createReducer('SHOW_ALL', {
  [t.SET_FILTER]: (state, action) => action.filter,
})
