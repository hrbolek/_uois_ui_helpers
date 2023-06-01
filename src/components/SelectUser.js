
import React from "react"
import ReactSelect from 'react-select';
import { useState } from "react";
import { AssignmentsCard } from "./AssignmentsCard";

const createColumns = (items, columns) => {
    const result = [];
    const itemsPerColumn = Math.ceil(items.length / columns);
    
    for (let i = 0; i < columns; i++) {
      result.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return result;
  };

export const SelectUser = ({users}) => {
    console.log("printing students")
    console.log(users)
    const [selectedTasks, setSelectedTasks] = useState();
    const handleSelectChange = (selected) => {
        const selected_user = users[selected.value]
        const all_tasks = selected_user.tasks
        setSelectedTasks(all_tasks)
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
                        selectedTasks.map((task) => (
                        <AssignmentsCard {...task} />))
                    }
                </div>
                )     
            }
        </div>
    )
}