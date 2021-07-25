import React, { useState } from 'react'

const TodoListItem = (props) => {
    return (
        <div className={"todo-list-item " + (props.completed ? "completed": "")}>
            <input id={"check_" + props.id}
                type="checkbox"
                checked={props.completed}
                onChange={()=> props.onToggleCompleted(props.id)}/>
            <label htmlFor={"check_" + props.id}>
                {props.content}
            </label>
            <button
                className="remove-button"
                onClick={() => props.onRemovePressed(props.id)}>
                Remove
            </button>
        </div>
    )
}

export default TodoListItem
