import React, { useState } from "react"
import { connect } from "react-redux"
import { createTodo } from "../store/actions/TodoListActions"

const TodoListItemForm = (props) => {
    const [todoContent, setTodoContent] = useState(props.content ? props.content : "")
    return (
        <div className="new-item-form">
            <input
                type="text"
                className="new-item-input"
                placeholder="Type new content here"
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)} />
            <button
                type="button"
                className="new-item-button"
                onClick={() => {
                    props.onCreatePressed(todoContent)
                    setTodoContent("")
                    }}>
                Create
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispachToProps = dispatch => ({
    onCreatePressed: content => dispatch(createTodo(content))
})

export default connect(mapStateToProps, mapDispachToProps)(TodoListItemForm)
