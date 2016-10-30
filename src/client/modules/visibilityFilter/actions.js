/**
 *  Action Types
 */
export const SET = 'visibilityFilter/SET'

/**
 *  Action Creators
 */
export const setVisibilityFilter = (filter) => ({
  type: SET,
  filter
})