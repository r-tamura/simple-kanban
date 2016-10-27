import { combineReducers } from 'redux'
import { TodoReducer } from './todos'
import { VisibilityFilterReducer } from './visibilityFilter'

/**
 *  各機能のReducerを結合します
 *  ここで指定されるkeyがstateのパラメータ名になります。
 */
const rootReducer = combineReducers({
  todos: TodoReducer,
  visibilityFilter: VisibilityFilterReducer
})

export {
  rootReducer
}