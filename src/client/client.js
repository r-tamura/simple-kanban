/* eslint global-require: "off" */
/* eslint import/newline-after-import: "off" */
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'store'
import Root from 'containers/Root/Root'
import { reloadCSS } from 'css-reload'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'

import './css/kanban.css'

// Hot Module Replacementが有効な場合にCSSを再リロードする
// if (module.hot) {
//   reloadCSS()
// }

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()
const rootEle = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component store={store} />
      </MuiThemeProvider>
    </AppContainer>,
    rootEle
  )
}
render(Root)

// TODO: react-hot-loaderではNextRoot不必要のはず
// http://abouthiroppy.hatenablog.jp/entry/2017/02/03/212817
// によると、react-hot-loader 3ではNextRootは不必要となるはずだが、動作しないので要調査
// if (module.hot) module.hot.accept('containers/Root/Root', () => render(Root))
if (module.hot) {
  module.hot.accept('containers/Root/Root', () => {
    const NextRoot = require('containers/Root/Root').default
    render(NextRoot)
  })
}
