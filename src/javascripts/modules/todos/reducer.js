import { combineReducers } from 'redux'
import { createReducer } from '../../common/utils'

const todo = createReducer({}, {
  ADD_TODO: (state, action) => {
    return {
      id: action.id,
      text: action.text,
      completed: false,
      //createdAt: new Date()
    }
  },
  TOGGLE_TODO: (state, action) => {
    if (state.id !== action.id) {
      return state
    }

    return {
      ...state,
      completed: !state.completed
    }
  }
})

const todos = createReducer([], {
  ADD_TODO: (state, action) => {
      return [
        ...state,
        todo(undefined, action)
      ]
  },
 TOGGLE_TODO: (state, action) => {
    return state.map(t => todo(t, action))
  }  
})

const visibilityFilter = createReducer('SHOW_ALL', {
  SET_VISIBILITY_FILTER: (state, action) => (
    action.filter
  )
})

export { todos, visibilityFilter }
