import { utils } from 'common'

/**
 * Action Types
 */
export const ADD = 'todos/ADD'
export const TOGGLE = 'todos/TOGGLE'

const idGen = utils.indexGenerator()

export const addTodo = (text) => ({
  type: ADD,
  id: idGen.next().value,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE,
  id
})