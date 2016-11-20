import { createSelector } from 'reselect'


export const ALL = 'SHOW_ALL'
export const COMPLETED = 'SHOW_COMPLETED'
export const ACTIVE = 'SHOW_ACTIVE'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos
const getPropsFilter = (_, props) => props.filter

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
    case ALL:
      return todos
    case COMPLETED:
      return todos.filter(t => t.completed)
    case ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
    }
  }
)

/**
 * フィルターが選択されているかを取得します
 * @returns { boolean } true: 選択されている / false: 選択されていない
 */
export const isActive = createSelector(
  [getVisibilityFilter, getPropsFilter],
  (stateFilter, propsFilter) => stateFilter === propsFilter
)
