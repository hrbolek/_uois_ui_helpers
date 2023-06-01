import { GroupPageQuery } from "queries/GroupPageQuery"
import { GroupActions } from "reducers/GroupReducers"

export const GroupsFetchHelper = (query, resultSelector, dispatch, getState) => {
    const p = query()
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.loadFromServer(json))
        )
    return p
}

export const GroupsFetch = () => (dispatch, getState) => {
    const groupsSelector = (json) => json.data.groupPage
    const bodyFunc = async () => {
        const groupsData = await GroupsFetchHelper(GroupPageQuery, groupsSelector, dispatch, getState)
        return groupsData
    }
    return bodyFunc()
}
