import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const task = action.payload
            state.push(task)
            return state
        },
        deleteTask: (state, action) => {
            const task = action.payload
            const newState = state.filter(i => i.id !== task.id)
            return newState
        },
        updateTask: (state, action) => {
            const newItem = action.payload;
            const oldItem = state[newItem.id]
            state[newItem.id] = {...oldItem, ...newItem}
            
            return state
        },
        loadFromServer: (state, action) => {
            const tasks = action.payload
            state = [...state, ...tasks]
            return state
        }
    }
})

export const TaskActions = taskSlice.actions

export default taskSlice.reducer