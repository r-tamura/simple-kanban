/* eslint global-require: "off" */
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store'
import { Root } from 'containers'
import { reloadCSS } from 'css-reload'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

require('./client/css/kanban.scss')

// Hot Module Replacementが有効な場合にCSSを再リロードする
if (module.hot) {
  reloadCSS()
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()
render(
  (
    <MuiThemeProvider>
      <Root store={store} />
    </MuiThemeProvider>
  ),
  document.getElementById('root')
)

