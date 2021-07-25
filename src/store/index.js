import { createStore, combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import storage from "redux-persist/lib/storage"
import { todos } from "./reducers/TodoListReducer"

const reducers = {
    todos
}

const rootReducer = combineReducers(reducers)

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const configureStore = () => createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())
