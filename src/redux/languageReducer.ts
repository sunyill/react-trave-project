/**
 * 創建reducer步驟
 */
interface languageState {
  language: 'en' | 'zh',
  languageList: { "name": string; "code": string }[]
}

const languageDefault: languageState = {
  language: 'zh',
  languageList: [{
    name: "中文", code: 'zh'
  }, { name: "英文", code: 'en' }]
}

export default (state = languageDefault, action)=>{
  return state;
}