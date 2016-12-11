import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import cards, * as fromCards from './cards'
import lanes, * as fromLanes from './lanes'

/**
 * Actions
 */
export const attachCardToLane = fromLanes.attachCard
export const createLane = fromLanes.createLane

export const createCard = fromCards.createCard
export const toggleCard = fromCards.toggleCard

/**
 *  Reducer
 *
 *  各機能のReducerを結合します
 *  ここで指定されるkeyがstateのパラメータ名になります。
 */
export const rootReducer = combineReducers({
  cards,
  lanes,
})

/**
 *  Selectors
 */
const getAllCards = state => fromCards.getAllCards(state.cards)
const getCardIdsOfLane = (state, props) => fromLanes.getLane(state.lanes, props.id).cards
export const getVisibilityFilter = (state, props) =>
  fromLanes.getVisibilityFilter(state.lanes, props.id)

export const getAllLanes = state => fromLanes.getAllLanes(state.lanes)

export const getCards = createSelector(
  getAllCards,
  getCardIdsOfLane,
  (allCards, ids) => allCards.filter(card => ids.includes(card.id))
)


export const getVisibleCards = (state, id) =>
  fromLanes.getVisibleCards(state.lanes, id)
