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
