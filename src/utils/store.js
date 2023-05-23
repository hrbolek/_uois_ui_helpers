import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './TaskReducers'
import { Provider } from 'react-redux'


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