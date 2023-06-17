
import { AssignmentsCard } from "../components/Tasks/TaskRow"
import { Assignments } from "./DataStructures"

export default {
    title: "Card visualizations",
    component: AssignmentsCard,
}


export const AssignmentsCardStory = {
    render: (args) => <AssignmentsCard {...args}/>,
    args: Assignments.all[1]
}