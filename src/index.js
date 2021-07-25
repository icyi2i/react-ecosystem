// Core react
import React from 'react'
import ReactDOM from 'react-dom'

// Redux and store persistence
import { configureStore } from "./store"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

// Root App component
import App from "./App"

// Initialize store and state persistor for store
const store = configureStore()
const persistor = persistStore(store)

// Render Provider with store, persistor and App component in root node
ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root"))
