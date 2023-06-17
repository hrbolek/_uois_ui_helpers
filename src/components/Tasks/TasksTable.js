import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"
import { useEffect } from "react";

//const array = Assignments.all
//multiplecard
export const TasksTable = ({user, setUser, createTask}) => {
    const handleCreateTask = (event) => {
        //into create task add default values for name and surname which cannot be changed - multiple task should have default values
        createTask()
        setUser({readOnly:true, ...user})
    }


    return (
        <table className="table" >
            <thead className="thead">
                <tr>
                    <th scope="col" style={{color:"blue"}}>{user.name} {user.surname}</th>
                    <th scope="col">název</th>
                    <th scope="col">datum zadání</th>
                    <th scope="col">datum odevzdání</th>
                    <th scope="col">popis</th>
                    <th scope="col">detailní popis</th>
                    <th scope="col">odkaz</th>
                </tr>
                
            </thead>
            <tbody>

                {user.tasks?.map((element, index) => (
                    <TaskRow key={element.id} index={index} {...element} />
                    ))}
            </tbody>
            <button type="button" class="btn btn-success" onClick={handleCreateTask}>+úkol</button>
        </table>

    )
}   