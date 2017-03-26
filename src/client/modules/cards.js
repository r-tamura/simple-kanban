// @flow
import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { utils } from 'common'
import card from './card'

/**
 * Action Types
 */
export const CREATE = 'cards/CREATE'
export const TOGGLE = 'cards/TOGGLE'

/**
 * Actions
 */
const cardIdGen = utils.idGenerator()

/**
 * 新規カード追加アクション
 * @param {number} boardId Board ID
 * @param {number} laneId Lane ID
 * @param {string} text カードテキスト
 * @return {TypeCreateCardAction}
 */
export const createCard = (boardId: number, laneId: number, text: string) => ({
  type: CREATE,
  cardId: cardIdGen.next().value,
  boardId,
  laneId,
  text,
})

export const toggleCard = cardId => ({
  type: TOGGLE,
  cardId,
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
      [action.cardId]: card(state[action.cardId], action),
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
      action.cardId,
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
