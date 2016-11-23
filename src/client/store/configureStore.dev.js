/* eslint global-require: "off" */
import { createStore, compose } from 'redux'
import { persistState } from 'redux-devtools'
import { DevTools } from 'containers'
import { rootReducer } from 'modules'

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=(^&#]+)\b/
    ),
  )
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('modules', () =>
      store.replaceReducer(require('modules').rootReducer)
    )
  }

  return store
}
