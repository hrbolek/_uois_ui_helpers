import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/UserReducers'
import { Provider } from 'react-redux'
import taskReducer from "reducers/TaskReducers"

const initialState = {
    tasks: [
        {
            id: "123",
            name: "prvni"
        },
        {
            id: "456",
            name: "druhy"
        }
    ]
}

export const store = configureStore({
    reducer: {
        users : userReducer,
        tasks : taskReducer
    },
    //preloadedState: initialState
})

export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}