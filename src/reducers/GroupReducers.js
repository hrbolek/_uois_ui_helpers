import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuid1 } from "uuid"

export const groupSlice = createSlice({
    name: "groups",
    initialState: {},
    reducers: {
        loadFromServer: (state, action) => {
            console.log(action.payload)
            action.payload.map(item => state[item.id] = {...item})
            return state
        }

    }
})

export const GroupActions = groupSlice.actions

export default groupSlice.reducer