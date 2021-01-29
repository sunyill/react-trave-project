import { createStore, combineReducers } from "redux"
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducers'

const rootReducer =combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer)
// ReturnType 映射关系
export type RootState = ReturnType<typeof store.getState>
export default store