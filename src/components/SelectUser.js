
import React from "react"
import CreatableSele from "react-select/creatable"
import ReactSelect from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { MultipleCards } from "./MultipleCards";
import { useState } from "react";
import { TaskActions } from "utils/TaskReducers";

export const SelectUser = (props) => {
    const users = useSelector(state => state.users)
    const tasks = useSelector(state => state.tasks)
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);
    const [allTasks, setAllTasks] = useState(null)


    const handleSelectChange = (selectedOption) => {
        const selected_user = users.filter(user => {
            return user.id === selectedOption.value;
          });
          const all_tasks = selected_user[0].tasks
          setShowAnotherComponent(true)
          setAllTasks(all_tasks)
      };

    const options = users.map(user => ({label: user.name, value: user.id}))
    return (
        <div>
            <ReactSelect options={options} onChange={handleSelectChange}/>

            {showAnotherComponent && <MultipleCards {...allTasks}/>}
        </div>
    )
}