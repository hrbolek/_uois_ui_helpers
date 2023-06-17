
import React from "react"
import ReactSelect from 'react-select';
import { useState } from "react";
import { AssignmentsCard } from "./Tasks/TaskRow";
import { TasksTable } from "./Tasks/TasksTable";

const createColumns = (items, columns) => {
    const result = [];
    const itemsPerColumn = Math.ceil(items.length / columns);
    
    for (let i = 0; i < columns; i++) {
      result.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return result;
  };

export const SelectUser = ({users, setCreateTask, setInputObject}) => {
    console.log("printing students")
    console.log(users)
    const [selectedTasks, setSelectedTasks] = useState();
    const [username, setUsername] = useState()
    const [userSurname, setUserSurname] = useState()

    const handleSelectChange = (selected) => {
        const selected_user = users[selected.value]
        const all_tasks = selected_user.tasks
        setSelectedTasks(all_tasks)
        setUsername(selected.label)
        setUserSurname(selected_user.surname)
      };
    let options = []
    if (users) {
        options = Object.entries(users).map(user => ({label: user[1].name, value: user[1].id}))
    }

    return (
        <div>
           Vyber studenta, jehož úkoly hledáš!
            <ReactSelect options={options} onChange={handleSelectChange} placeholder="Vyber studenta"/>
            {
                selectedTasks &&
                (
                <div>
                    {
                        <TasksTable array={selectedTasks} userName={username} userSurname={userSurname} createTask={setCreateTask} setInputObject={setInputObject}/>
                    }
                </div>
                )     
            }
        </div>
    )
}