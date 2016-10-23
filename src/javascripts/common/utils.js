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