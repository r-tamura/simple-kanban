/* eslint global-require: "off" */
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store'
import { Root } from 'containers'
import { reloadCSS } from 'css-reload'

require('./client/css/kanban.scss')

// Hot Module Replacementが有効な場合にCSSを再リロードする
if (module.hot) {
  reloadCSS()
}

const store = configureStore()
render(
  <Root store={store} />,
  document.getElementById('root')
)

