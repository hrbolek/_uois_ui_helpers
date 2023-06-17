import { useSelector } from "react-redux"
import { TextInput } from "./TextInput"
import { useEffect } from "react"
import ReactSelect from 'react-select';

//if something is selected
export const UserSelectInteractive = ({actions}) => {
    const users = useSelector(state => state.users)

    const handleInputChange = (value) => {
        actions.partUsersFetch(value)
    }

    let options = []
    if (users) {
        options = Object.entries(users).map(user => ({
            label: user[1].name + " " + user[1].surname + " " + user[1].email, value: user[1].id}))
    }

    return (
        <div>
            <TextInput placeholder="Zadejte jméno nebo příjmení studenta" onChange={handleInputChange} value=""/>
            {options.length > 0 && <ReactSelect options={options} placeholder="Vyberte studenta"/>}
        </div>

    )
}