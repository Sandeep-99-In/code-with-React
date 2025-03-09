import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({                           //createSlice it will take objects
    name: 'todo',
    initialState,
    reducers: {                                                 //reducer will take properties and functions
        addTodo: (state, action) => {                           //when we have use addTodo it will take two values one is state and second is action
            const todo = {
                id: nanoid(),                                   //nanoid() it will genrate unique id.
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer