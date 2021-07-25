import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED } from "../actions/TodoListActions"
import { v4 } from "uuid"

export const todos = (state = [], action) => {
    const { type , payload } = action
    let content, id
    switch (type) {
        case CREATE_TODO:
            ({ content } = payload)
            const newTodo = {
                id: v4(),
                content: content,
                completed: false
            }
            return state.concat(newTodo)
        case REMOVE_TODO:
            ({ id } = payload)
            return state.filter(todo => todo.id !== id)
        case TOGGLE_TODO_COMPLETED:
            ({ id } = payload)
            return state.map(todo => (
                todo.id === id ? {...todo, completed:!todo.completed}: todo
                ))
        default:
            return state
    }
}
