/**
 *  共通関数
 */


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