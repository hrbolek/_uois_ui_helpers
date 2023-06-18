
import { DateInput } from "../components/Tasks/TaskDateFulfillmentInput"

export default {
    title: "Date input",
    component: DateInput,
}


export const DateInputStory = {
    render: (args) => <DateInput{...args}/>,
    args:  {
    }
}