
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
    const [setselectedTasks, setsetselectedTasks] = useState();
    const handleSelectChange = (selected) => {
        const selected_user = users.find(user => {
            return user.id === selected.value;
          });
          const all_tasks = selected_user.tasks
          setsetselectedTasks(all_tasks)
      };

    const options = users.map(user => ({label: user.name, value: user.id}))
    const new_options = createColumns(options, 3)

    return (
        <div>
           Vyber studenta, jehož úkoly hledáš!
            <ReactSelect options={new_options} onChange={handleSelectChange} placeholder="Vyber studenta"/>
            {
                setselectedTasks &&
                (
                <div>
                    {
                        setselectedTasks.map((task) => (
                        <AssignmentsCard {...task} />))
                    }
                </div>
                )     
            }
        </div>
    )
}