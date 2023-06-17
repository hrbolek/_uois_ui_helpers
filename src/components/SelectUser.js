
import React from "react"
import ReactSelect from 'react-select';
import { useState } from "react";
import { AssignmentsCard } from "./Tasks/TaskRow";
import { TasksTable } from "./Tasks/TasksTable";
import { useEffect } from "react";

const createColumns = (items, columns) => {
    const result = [];
    const itemsPerColumn = Math.ceil(items.length / columns);
    
    for (let i = 0; i < columns; i++) {
      result.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return result;
  };

export const SelectUser = ({users, setCreateTask, setUser}) => {
    const [selectedUser, setSelectedUser] = useState()

    const handleSelectChange = (selected) => {
        setSelectedUser(users[selected.value])
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
                selectedUser &&
                (
                <div>
                    {
                        <TasksTable user={selectedUser} createTask={setCreateTask} setUser={setUser}/>
                    }
                </div>
                )     
            }
        </div>
    )
}