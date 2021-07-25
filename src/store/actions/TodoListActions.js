export const CREATE_TODO = "CREATE_TODO"
export const createTodo = content => ({
    type: CREATE_TODO,
    payload: { content }
})

export const REMOVE_TODO = "REMOVE_TODO"
export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: { id }
})

export const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED"
export const toggleTodoCompleted = id => ({
    type: TOGGLE_TODO_COMPLETED,
    payload: { id }
})
