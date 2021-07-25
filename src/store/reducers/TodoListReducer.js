import { CREATE_TODO, REMOVE_TODO } from "../actions/TodoListActions"
import { v4 } from "uuid"

export const todos = (state = [], action) => {
    const { type , payload } = action

    switch (type) {
        case CREATE_TODO:
            const { content } = payload
            const newTodo = {
                id: v4(),
                content: content,
                completed: false
            }
            return state.concat(newTodo)
        case REMOVE_TODO:
            const { id } = payload
            return state.filter(todo => todo.id !== id)
        default:
            return state
    }
}
