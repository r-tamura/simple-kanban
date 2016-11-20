import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from 'containers'
import { rootReducer } from 'modules'
import { reloadCSS } from 'css-reload'

require('./client/css/kanban.scss')

// Hot Module Replacementが有効な場合にCSSを再リロードする
if (module.hot) {
  reloadCSS()
}

const store = createStore(rootReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
