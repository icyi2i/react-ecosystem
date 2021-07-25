import React, { useState } from 'react'

const TodoListItem = (props) => {
    const [completed, setCompleted] = useState(props.completed)
    return (
        <div className={"todo-list-item " + (completed ? "completed": "")}>
            <input id={"check_" + props.id}
                type="checkbox"
                checked={completed}
                onChange={()=> setCompleted(!completed)}/>
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
