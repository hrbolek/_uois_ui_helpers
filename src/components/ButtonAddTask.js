
import { TaskAsyncInsert } from "fetches/TaskAsyncActions"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { TaskActions } from "reducers/TaskReducers"
import { v1 as uuid1 } from "uuid"

export const ButtonAddTask = (props) => {

    const dispatch = useDispatch()


    const newTask = {userId: "2d9dcbec-a4a2-11ed-b9df-0242ac120003", name: "newName",
        briefDes: "new brief descriptionnn", detailedDes: "new dettttt", reference: "www.google.com",
        dateOfSubmission: "2023-05-30T05:59:32.689363", dateOfFulfillment: "2023-05-30T05:59:32.689363"}

//When the user clicks one of these buttons, 
//they are sent to an action function that performs a specific task
    const onClick = (event) => { 
        dispatch(TaskAsyncInsert(newTask))
    }

    const deleteT = (event) => {
        dispatch(TaskActions.deleteTask({id: "123"}))
    }
    if (props.d) {
        return (
            <Button onClick={onClick}>pridej task</Button>//button 1
        )
    }
    return (
        <Button onClick={deleteT}>smaz michala</Button>//button 2
    )
}