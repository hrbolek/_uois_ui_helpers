import { MultipleCards } from "../components/AssignmentsTable"
import { Assignments } from "./DataStructures"


export default {
    title: "Card visualizations",
    component: MultipleCards,

}

export const MultipleCardsStory = {
    render: (args) => <MultipleCards {...args}/>,
    args : {
        array: Assignments.all
    }
}