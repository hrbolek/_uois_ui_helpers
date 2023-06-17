import { useState } from "react";
import ReactSelect from 'react-select';
import { TasksTable } from "./Tasks/TasksTable";

export const SelectGroup = ({groups}) => {
    console.log(groups)
    const [selectedGroup, setSelectedGroup] = useState();

    const handleSelectChange = (selected) => {
        const selected_group = groups[selected.value];
          setSelectedGroup(selected_group)
      };
    let options = []
    if (groups) {
        options = Object.entries(groups).map(group => ({label: group[1].name, value: group[1].id}))
    }

    let selectedGroupTasks = []

    return (
        <div>
            Vyber studijní skupinu, jejiž úkoly hledáš!
            <ReactSelect options={options} onChange={handleSelectChange} placeholder="Výběr studijní skupiny"/>
            {
                selectedGroup &&
                (
                <div>
                    <TasksTable array={selectedGroupTasks} />
                </div>
                )     
            }
        </div>
    )
}