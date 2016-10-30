import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const ALL = 'SHOW_ALL'
export const COMPLETED = 'SHOW_COMPLETED'
export const ACTIVE = 'SHOW_ACTIVE'

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
      throw new Error('Unknown filter: ' + filter)
    }
  }
)