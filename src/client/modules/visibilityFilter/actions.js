/**
 *  Action Types
 */
export const SET = 'visibilityFilter'

/**
 *  Action Creators
 */
export const setVisibilityFilter = (filter) => ({
  type: SET,
  filter
})