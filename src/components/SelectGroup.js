import { useState } from "react";
import ReactSelect from 'react-select';

export const SelectGroup = ({groups}) => {
    console.log(groups)
    const [selectedGroup, setSelectedGroup] = useState();

    const handleSelectChange = (selected) => {
        const selected_group = groups[selected.value];
          setSelectedGroup(selected_group)
      };
    let options = []
    if (groups) {
        console.log("printing entries")
        console.log(Object.entries(groups))
        options = Object.entries(groups).map(group => ({label: group[1].name, value: group[1].id}))
    }

    return (
        <div>
            Vyber studijní skupinu, jejiž úkoly hledáš!
            <ReactSelect options={options} onChange={handleSelectChange} placeholder="Výběr studijní skupiny"/>
            {
                selectedGroup &&
                (
                <div>
                    {selectedGroup.name}
                </div>
                )     
            }
        </div>
    )
}