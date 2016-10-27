import { utils } from 'common'
import * as t from './actions'

const todo = utils.createReducer({}, {
  [t.ADD]: (state, action) => {
    return {
      id: action.id,
      text: action.text,
      completed: false,
      //createdAt: new Date()
    }
  },
  [t.TOGGLE]: (state, action) => {
    if (state.id !== action.id) {
      return state
    }

    return {
      ...state,
      completed: !state.completed
    }
  }
})

const todos = utils.createReducer([], {
  [t.ADD]: (state, action) => {
    return [
      ...state,
      todo(undefined, action)
    ]
  },
  [t.TOGGLE]: (state, action) => {
    return state.map(t => todo(t, action))
  }  
})

export default todos
