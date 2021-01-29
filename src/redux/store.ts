import { createStore, combineReducers,applyMiddleware } from "redux"
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducers'
import thunk from 'redux-thunk'

const rootReducer =combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))
// ReturnType 映射关系
export type RootState = ReturnType<typeof store.getState>
export default store