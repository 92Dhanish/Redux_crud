
// import { createStore } from "redux";
import mainreducer from "./Services/Reducer";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, mainreducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



//   let store = createStore(persistedReducer)
  let persistor = persistStore(store)

export default store
export {persistor}