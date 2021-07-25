import React from 'react'
import {hot} from 'react-hot-loader'
import "./App.css"
import TodoList from "./components/TodoList"

let todos = [
    {
        content: "Magni voluptates debitis odio magni. Quos provident est repellat a dolores doloribus dicta.",
        completed: false
    },
    {
        content: "voluptatum cum eaque",
        completed: true
    },
    {
        content: "Quia error ex id quidem quo. Necessitatibus ex soluta commodi voluptatem facilis saepe debitis officia autem. Perspiciatis beatae in in repudiandae quis vitae quas quaerat.",
        completed: false
    },
    {
        content: "Ut laborum voluptas.",
        completed: false
    },
    {
        content: "voluptatem accusantium velit",
        completed: true
    },
]

export const App = () => {
    return (
        <div className="App">
            <h1>WhatTodo!</h1>
            <TodoList todos={todos}/>
        </div>
    )
}

export default hot(module)(App)
