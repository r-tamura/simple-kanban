/* eslint global-require: "off" */
import { applyMiddleware, createStore, compose } from 'redux'
// import { persistState } from 'redux-devtools'
import createLogger from 'redux-logger'
// import { DevTools } from 'containers'
import { rootReducer as reducer } from 'modules'

// Loggerインスタンス生成
// Log level: consoleに表示されるログレベルはinfo
// collapsed: ログ折り畳みON
const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const enhancer = compose(
  applyMiddleware(logger),
  // DevTools.instrument(),
  // persistState(
  //   window.location.href.match(
  //     /[?&]debug_session=(^&#]+)\b/
  //   ),
  // )
)

export default function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, enhancer)

  if (module.hot) {
    module.hot.accept('modules', () =>
      store.replaceReducer(require('modules').reducer)
    )
  }

  return store
}
