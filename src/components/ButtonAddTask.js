
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {UserActions} from "utils/UserReducers"
import { v1 as uuid1 } from "uuid"

export const ButtonAddTask = (props) => {
    const dispatch = useDispatch()

    const onClick = (event) => {
        dispatch(UserActions.addTask({id: uuid1(), name:"michal"}))
    }

    const deleteT = (event) => {
        dispatch(UserActions.deleteTask({id: "123"}))
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