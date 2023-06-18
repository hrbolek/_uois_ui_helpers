import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"
import { useEffect } from "react";
import { useSelector } from "react-redux";

//const array = Assignments.all
//multiplecard
export const TasksTable = ({userId, actions}) => {
    const users = useSelector(state => state.users)
    //if userId changed -useEffect, fetch his tasks
    useEffect(
        () => {
            //fetch his tasks by userId
            actions.userTasksFetch(userId)
        }, [userId]
    )
    const user = users[userId]
    if (user?.tasks) {
        return (
            <div>
                <table className="table" >
                    <thead className="thead">
                        <tr>
                            <th scope="col" style={{color:"blue"}}>{user?.name} {user?.surname}</th>
                            <th scope="col">název</th>
                            <th scope="col">datum zadání</th>
                            <th scope="col">datum odevzdání</th>
                            <th scope="col">popis</th>
                            <th scope="col">detailní popis</th>
                            <th scope="col">odkaz</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        
                        {user?.tasks?.map((element, index) => (
                            <TaskRow key={element.id} index={index} {...element} />
                            ))}
                    </tbody>
                </table>
                <button type="button" className="btn btn-success">+úkol</button>
            </div>
        )
    } else {
        return (
            <div>
                Načítám úkoly...
            </div>
        )
    }
}   