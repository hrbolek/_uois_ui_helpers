
import React from "react"
import ReactSelect from 'react-select';
import { useState } from "react";
import { AssignmentsCard } from "./AssignmentsCard";



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

    return (
        <div>
            <ReactSelect options={options} onChange={handleSelectChange}/>
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