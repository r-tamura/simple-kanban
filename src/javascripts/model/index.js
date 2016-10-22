import { combineReducers } from 'redux'
import { TodoReducer } from './todos'

/**
 *  各機能のReducerを結合します
 *  ここで指定されるkeyがstateのパラメータ名になります。
 */
const AppReducer = combineReducers({
  todos: TodoReducer.todos,
  visibilityFilter: TodoReducer.visibilityFilter
})

export {
  AppReducer
}