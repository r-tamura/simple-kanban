import { utils } from '../../common/'

const idGen = utils.indexGenerator()

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: idGen.next().value,
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
