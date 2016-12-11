import { CREATE, TOGGLE } from './cards'

const card = (state = {}, action) => {
  switch (action.type) {
  case CREATE: {
    return {
      id: action.id,
      text: action.text,
      completed: false,
    }
  }
  case TOGGLE: {
    if (state.id !== action.id) {
      return state
    }
    return {
      ...state,
      completed: !state.completed,
    }
  }
  default: {
    return state
  }
  }
}

export default card
