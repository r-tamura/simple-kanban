import { CREATE, TOGGLE } from './cards'

const card = (state = {}, action) => {
  switch (action.type) {
  case CREATE: {
    return {
      id: action.cardId,
      text: action.text,
      completed: false,
    }
  }
  case TOGGLE: {
    if (state.id !== action.cardId) {
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
