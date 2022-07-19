import { createStore, applyMiddleware } from 'redux' //add this
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
import thunk from 'redux-thunk' //add this
import logger from 'redux-logger' //addthis

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk, logger)) //add this
let persistor = persistStore(store)
export {
    store,
    persistor
}