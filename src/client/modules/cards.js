import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { utils } from 'common'
import card from './card'

const cardIdGen = utils.indexGenerator(10000)

/**
 * Action Types
 */
export const CREATE = 'cards/CREATE'
export const TOGGLE = 'cards/TOGGLE'

export const createCard = ({
  text,
}) => ({
  type: CREATE,
  id: cardIdGen.next().value,
  text,
})

export const toggleCard = id => ({
  type: TOGGLE,
  id,
})

/**
 * Reducer
 */
const byId = (state = {}, action) => {
  switch (action.type) {
  case CREATE:
  case TOGGLE:
    return {
      ...state,
      [action.id]: card(state[action.id], action),
    }
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case CREATE:
    return [
      ...state,
      action.id,
    ]
  default:
    return state
  }
}

export default combineReducers({
  byId,
  allIds,
})

/**
 * Selectors
 */
export const TAG_ALL = 'cards/All'
export const TAG_COOL = 'cards/Cool'
export const TAG_WARM = 'cards/Warm'
export const TAG_HOT = 'cards/Hot'

export const getCard = (state, id) => state.byId[id]
export const getCards = (state, ids) => ids.map(id => getCard(state, id))
export const getAllCards = state => state.allIds.map(id => getCard(state, id))

export const getVisibleCards = (state, filter) => (
  filter === TAG_ALL ? state : state.filter(c => c.tag === filter)
)

export const getAllCount = createSelector(
  getAllCards,
  cards => cards.length
)
