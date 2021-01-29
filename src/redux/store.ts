import { createStore} from "redux"
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer)
// ReturnType 映射关系
export type RootState = ReturnType<typeof store.getState>
export default store