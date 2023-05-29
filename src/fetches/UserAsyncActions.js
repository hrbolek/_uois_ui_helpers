import { UserPageQuery } from "queries/UserPageQuery"
import { UserActions } from "reducers/UserReducers"

export const UsersFetchHelper = (query, resultSelector, dispatch, getState) => {
    const p = query()
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(UserActions.loadFromServer(json))
        )
    return p
}



//if id is None return userPage
export const UsersFetch = () => (dispatch, getState) => {
    const usersSelector = (json) => json.data.userPage
    const bodyFunc = async () => {
        const usersData = await UsersFetchHelper(UserPageQuery, usersSelector, dispatch, getState)
        return usersData
    }
    return bodyFunc()
}

