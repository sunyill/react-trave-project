/**
 * 創建reducer步驟
 */
import {CHANGE_LANGUAGE} from '../utils/constant'
export interface languageState {
  language: 'en' | 'zh',
  languageList: { "name": string; "code": string }[]
}

const languageDefault: languageState = {
  language: 'zh',
  languageList: [{
    name: "中文", code: 'zh'
  }, { name: "English", code: 'en' }]
}

export default (state = languageDefault, action)=>{
  console.log("state==",state, "====action",action);
  if(action.type==="CHANGE_LANGUAGE"){
    const newState = {...state, language:action.payload }
    return newState;
  }
  return state;
}