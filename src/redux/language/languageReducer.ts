/**
 * 創建reducer步驟
 */
import {CHANGE_LANGUAGE,ADD_NEW_LANGUAGE,LanguageActionTypes} from './languageActions'
import i18n from 'i18next'
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

export default (state = languageDefault, action:LanguageActionTypes)=>{
  switch(action.type){
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return {...state, language:action.payload }
    case ADD_NEW_LANGUAGE:
      return {...state,languageList:[...state.languageList,action.payload] }
      default:
        return state
  }
}