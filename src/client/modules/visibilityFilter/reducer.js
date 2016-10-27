import { utils } from 'common'

/**
 * Reducer
 */
const visibilityFilter = utils.createReducer('SHOW_ALL', {
  SET_VISIBILITY_FILTER: (state, action) => (
    action.filter
  )
})

export default visibilityFilter