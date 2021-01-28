export const CHANGE_LANGUAGE = "change_language" // 语言切换
export const ADD_NEW_LANGUAGE = 'add_new_language'  // 添加新语言

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}
interface AddLanguageAction {
  type: typeof ADD_NEW_LANGUAGE,
  payload: { name: string, code: string }
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction

export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'):ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addNewLanguageActionCreator = (name: string, code: string):AddLanguageAction => {
  return {
    type: ADD_NEW_LANGUAGE,
    payload: { name, code }
  }
}