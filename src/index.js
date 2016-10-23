import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './javascripts/components/App'
import { AppReducer } from './javascripts/modules/'
import { reloadCSS } from './css-reload'

// Hot Module Replacementが有効な場合にCSSを再リロードする
if (module.hot) {
  reloadCSS();
}

const store = createStore(AppReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

