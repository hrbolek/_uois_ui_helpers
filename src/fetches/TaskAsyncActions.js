import { TaskPageQuery } from "queries/TaskPageQuery"
import { TaskActions } from "reducers/TaskReducers"

export const TasksFetchHelper = (query, resultSelector, dispatch, getState) => {
    const p = query()
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(TaskActions.loadFromServer(json))
        )
    return p
}


export const TasksFetch = () => (dispatch, getState) => {
    const tasksSelector = (json) => json.data.taskPage
    const bodyFunc = async () => {
        const tasksData = await TasksFetchHelper(TaskPageQuery, tasksSelector, dispatch, getState)
        return tasksData
    }
    return bodyFunc()
}