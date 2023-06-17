import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"

//const array = Assignments.all
//multiplecard
export const TasksTable = (props) => {

    const handleCreateTask = (event) => {
        //into create task add default values for name and surname which cannot be changed - multiple task should have default values
        props.createTask()
        console.log(props.userSurname)
        props.setInputObject({readOnly:true, userName:props.userName, userSurname:props.userSurname})
    }

    return (
        <table className="table" >
            <thead className="thead">
                <tr>
                    <th scope="col" style={{color:"blue"}}>{props.userName}</th>
                    <th scope="col">název</th>
                    <th scope="col">datum zadání</th>
                    <th scope="col">datum odevzdání</th>
                    <th scope="col">popis</th>
                    <th scope="col">detailní popis</th>
                    <th scope="col">odkaz</th>
                </tr>
                
            </thead>
            <tbody>

                {props.array?.map((element, index) => (
                    <TaskRow key={element.id} index={index} {...element} />
                    ))}
            </tbody>
            <button type="button" class="btn btn-success" onClick={handleCreateTask}>+úkol</button>
        </table>

    )
}   