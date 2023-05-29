
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { TaskActions } from "reducers/TaskReducers"
import { v1 as uuid1 } from "uuid"

export const ButtonAddTask = (props) => {

    const dispatch = useDispatch()

    const onClick = (event) => {
        dispatch(TaskActions.addTask({name:"novej task"}))
    }

    const deleteT = (event) => {
        dispatch(TaskActions.deleteTask({id: "123"}))
    }
    if (props.d) {
        return (
            <Button onClick={onClick}>pridej task</Button>
        )
    }
    return (
        <Button onClick={deleteT}>smaz michala</Button>
    )
}