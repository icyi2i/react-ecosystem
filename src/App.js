import React from 'react'
import {hot} from 'react-hot-loader'
import "./App.css"
import TodoList from "./components/TodoList"

export const App = () => {
    return (
        <div className="App">
            <h1>WhatTodo!</h1>
            <TodoList />
        </div>
    )
}

export default hot(module)(App)
