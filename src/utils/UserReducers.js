import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            const task = action.payload
            state.push(task)
            return state
        },
        deleteUser: (state, action) => {
            const task = action.payload
            const newState = state.filter(i => i.id !== task.id)
            return newState
        },
        updateUser: (state, action) => {
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

export const UserActions = userSlice.actions

export default userSlice.reducer