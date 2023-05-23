
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {TaskActions} from "utils/TaskReducers"
import { v1 as uuid1 } from "uuid"

export const ButtonAddTask = (props) => {
    const dispatch = useDispatch()

    const onClick = (event) => {
        dispatch(TaskActions.addTask({id: uuid1(), name:"michal"}))
    }

    const deleteT = (event) => {
        dispatch(TaskActions.deleteTask({id: "123"}))
    }
    if (props.d) {
        return (
            <Button onClick={onClick}>pridej michala</Button>
        )
    }
    return (
        <Button onClick={deleteT}>smaz michala</Button>
    )
}