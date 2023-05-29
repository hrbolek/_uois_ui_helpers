import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TasksFetch } from "fetches/TaskAsyncActions"

export const TaskLoader = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    useEffect(() => {
        console.log("printing tasks")
        dispatch(TasksFetch())
    }, [])

    if (tasks) {
        return (
            <div>tasks loaded {Object.keys(tasks).length}</div>
        )
    } else {
        return (
            <div>task loading</div>
        )
    }

}