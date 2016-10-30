// Hot Module Replacementが有効な場合にCSSを再リロードする
// http://stackoverflow.com/questions/30441883/webpack-hotmodulereplacement-css
export const reloadCSS = () => {
  const onMessage = event => {
    if (typeof event.data === 'string' && event.data.indexOf('webpackHotUpdate') === 0) {
      console.log('Reloading style sheets...')
      Array.from(document.styleSheets).forEach(sheet => {
        if ((sheet.href || '').indexOf('localhost') !== -1) {
          sheet.ownerNode.href = sheet.href
        }
      })
    }
  }
  window.addEventListener('message', onMessage)
  window.addEventListener('onmessage', onMessage)
}