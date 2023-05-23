
import React, { useEffect } from "react"
import CreatableSele from "react-select/creatable"
import ReactSelect from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { MultipleCards } from "./MultipleCards";
import { useState } from "react";
import { TaskActions } from "utils/TaskReducers";
import { AssignmentsCard } from "./AssignmentsCard";



export const SelectUser = (props) => {
    const users = useSelector(state => state.users)
    
    const [selectedOption, setSelectedOption] = useState();

    const handleSelectChange = (selected) => {
        const selected_user = users.find(user => {
            return user.id === selected.value;
          });
          const all_tasks = selected_user.tasks
          console.log(all_tasks)
          setSelectedOption(all_tasks)
      };

    const options = users.map(user => ({label: user.name, value: user.id}))
    console.log(selectedOption)

    return (
        <div>
            <ReactSelect options={options} onChange={handleSelectChange}/>
            
            {
                selectedOption &&
                (
                <div>
                    {
                        selectedOption.map((task) => (
                        <AssignmentsCard {...task} />))
                    }
                </div>
                )     
            }
        </div>
    )
}