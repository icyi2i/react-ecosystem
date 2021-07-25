import React, { useState } from 'react'
import { connect } from "react-redux"
import TodoListItem from "./TodoListItem"
import TodoListItemForm from "./TodoListItemForm"

import "./TodoList.css"
import { removeTodo } from "../store/actions/TodoListActions"

const TodoList = (props) => {

    return (
        <div className="todo-list">
            <TodoListItemForm />
            {
                props.todos.map(
                    (todo) => <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        content={todo.content}
                        completed={todo.completed}
                        onRemovePressed={props.onRemovePressed}
                        />
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispachToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispachToProps)(TodoList)
