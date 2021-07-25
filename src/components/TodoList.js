import React from 'react'
import { connect } from "react-redux"
import TodoListItem from "./TodoListItem"
import TodoListItemForm from "./TodoListItemForm"
import { removeTodo, toggleTodoCompleted } from "../store/actions/TodoListActions"

import "./TodoList.css"

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
                        onToggleCompleted={props.onToggleCompleted}
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
    onRemovePressed: id => dispatch(removeTodo(id)),
    onToggleCompleted: id => dispatch(toggleTodoCompleted(id)),
})

export default connect(mapStateToProps, mapDispachToProps)(TodoList)
