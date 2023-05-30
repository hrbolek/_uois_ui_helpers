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

export const TaskAsyncInsert = (task) => (dispatch, getState) => {
    const taskMutationJSON = (task) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                groupUpdate(group: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  group {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: task
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(taskMutationJSON(task))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.taskUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.taskUpdate.task.lastchange
                    dispatch(TaskActions.addTask({...task, lastchange: lastchange}))
                }
                return json
            }
        )   
}