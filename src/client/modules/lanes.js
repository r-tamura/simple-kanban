import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { utils } from 'common'
import * as FromCards from './cards'

/**
 * Actions
 */
export const CREATE = 'lanes/CREATE'
export const DELETE = 'lanes/DELETE'
export const SET_FILTER = 'lanes/SetFilter'
export const ATTACH_CARD = 'lanes/ATTACH_CARD'

const idGen = utils.idGenerator()

export const attachCard = (laneId, cardId) => ({
  type: ATTACH_CARD,
  laneId,
  cardId,
})

export const addLane = text => ({
  type: CREATE,
  laneId: idGen.next().value,
  text,
})

export const setVisibilityFilter = filter => ({
  type: SET_FILTER,
  filter,
})

/**
 * Reducer
 */
const initialLaneState = {
  title: 'No Title',
  cards: [],
  visibilityFilter: FromCards.TAG_ALL,
}
const lane = (state = initialLaneState, action) => {
  switch (action.type) {
  case ATTACH_CARD:
  case FromCards.CREATE: {
    const { cardId } = action
    const nextState = { ...state }
    nextState.cards = [
      ...nextState.cards,
      cardId,
    ]
    return nextState
  }
  default:
    return state
  }
}

const initialLanes = {
  byId: { 0: lane(undefined, {}) },
  allIds: [0],
}

const byId = (state = initialLanes.byId, action) => {
  switch (action.type) {
  case CREATE:
  case ATTACH_CARD:
  case FromCards.CREATE: {
    const { laneId } = action
    return {
      ...state,
      [laneId]: lane(state[laneId], action),
    }
  }
  default:
    return state
  }
}

const allIds = (state = initialLanes.allIds, action) => {
  switch (action.type) {
  case CREATE:
    return [
      ...state,
      action.lane,
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
export const getLane = (state, id) => state.byId[id]
export const getAllIds = state => state.allIds
export const getAllLanes = state => state.allIds.map(id => state.byId[id])
export const getVisibilityFilter = (state, id) => getLane(state, id).visibilityFilter
export const getCardIds = (state, id) => getLane(state, id).cards

/**
 * 画面に表示されるカードを取得します
 */
export const getVisibleCards = createSelector(
  FromCards.getAllCards,
  getVisibilityFilter,
  FromCards.getVisibleCards
)

