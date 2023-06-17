import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/UserReducers'
import { Provider } from 'react-redux'
import taskReducer from "reducers/TaskReducers"
import groupReducer from 'reducers/GroupReducers'
import { PartUsersFetch } from 'fetches/UserAsyncActions'

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
        tasks : taskReducer,
        groups: groupReducer
    },
    //preloadedState: initialState
})

const dispatch = store.dispatch


export const actions = {
    partUsersFetch: (letters) => dispatch(PartUsersFetch(letters)),

}


export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}