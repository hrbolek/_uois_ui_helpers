
import Select from "react-select/async"
import { useSelector } from "react-redux"
export const UserAsyncSelectInput = ({actions}) => {
    const users = useSelector(state => state.users)

    const handleInputChange = (value) => {
        console.log(value)
        actions.partUsersFetch(value)
    }

    
    let options = []
    if (users) {
        options = Object.entries(users).map(user => ({
            label: user[1].name + " " + user[1].surname + " " + user[1].email, value: user[1].id}))
    }

    return (
        <Select options={options} onInputChange={handleInputChange}/>

    )
}