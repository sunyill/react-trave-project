import { createStore, combineReducers, applyMiddleware } from "redux"
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducers'
import thunk from 'redux-thunk'
import { actionLog } from './middleWares/actionLog'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
// ReturnType 映射关系
export type RootState = ReturnType<typeof store.getState>
export default store