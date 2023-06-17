import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"

//const array = Assignments.all
//multiplecard
export const TasksTable = (props) => {
    console.log(props.array.length)
    console.log(props.userName)
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
        </table>

    )
}   