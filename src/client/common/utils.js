/**
 *  共通関数
 */

/**
 * 指定された初期値から数値を第二引数で指定された値ずつ加算した値を取得するジェネレータ
 * @params {number} initialValue 初期値 (デフォルト: 0)
 * @params {number} step 次のインデックスへ加算する値(デフォルト：1)
 * @yield {number} 次のインデックス
 */
export function* indexGenerator(initialValue = 0, step = 1) {
  let i = initialValue
  while(true) {
    yield i
    i += step
  }
}
/**
 * 第二引数で指定された桁数だけ"0"埋めを行った文字列を返す
 * @param {number} number 0埋めを行う対象(負の数も対応)
 * @param {number} numZeros 0埋めの桁数
 * @return {string} 0埋めされた文字列
 */
export function zeroFill(number, numZeros) {
  var n = Math.abs(number)
  var zeros = Math.max(0, numZeros - Math.floor(n).toString().length )
  var zeroString = Math.pow(10, zeros).toString().slice(1)
  if( number < 0 ) {
    zeroString = '-' + zeroString
  }
  return zeroString + n
}

/**
 * 日付を指定されたフォーマットの文字列に変換します(yyyymmddのみ実装)
 * @param {Date} date 日付
 * @param {string} format 出力フォーマット(デフォルトyyyymmdd)
 * @return {string} 指定されたフォーマットに変換された文字列 
 */
export function formatDate(date, format= "yyyymmdd hh:MM:ss") {
    let formatted = "",  fmt = format
    let year = zeroFill(date.getFullYear(),4)
    let month = zeroFill(date.getMonth()+1, 2)
    let dayOfMonth = zeroFill(date.getDate(), 2)
    let hour = zeroFill(date.getHours(), 2)
    let min = zeroFill(date.getMinutes(), 2)
    let sec = zeroFill(date.getSeconds(), 2)
    return `${year}/${month}/${dayOfMonth} ${hour}:${min}:${sec}`
}


// ======= React系共通関数 ================================
/**
 * ハンドラーリストからReducerを生成します
 * @params {object} iniState 初期State
 * @params {array<function>} handlers State更新処理リスト
 * @returns {function} Reducer関数
 */
export const createReducer = (iniState, handlers) => {
  return function reducer(state = iniState, action) {
    if(handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}