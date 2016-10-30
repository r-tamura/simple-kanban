import { utils } from 'common'
import * as t from './actions'

/**
 * Reducer
 */
const visibilityFilter = utils.createReducer('SHOW_ALL', {
  [t.SET]: (state, action) => {
    return action.filter
  }
})

export default visibilityFilter