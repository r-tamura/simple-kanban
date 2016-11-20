import { combineReducers } from 'redux'
import { todos, visibilityFilter } from './todos'

/**
 *  各機能のReducerを結合します
 *  ここで指定されるkeyがstateのパラメータ名になります。
 */
const rootReducer = combineReducers({
  todos,
  visibilityFilter,
})

export {
  rootReducer,
}
