import { MultipleCards } from "../components/Tasks/TasksTable"
import { AssignmentsCard } from "../components/Tasks/TaskRow"
import {ShowButton} from "../components/ShowButton"
import { Assignments, Students } from "./DataStructures"
import { Card } from "react-bootstrap"
import { StudentsCard } from "../components/StudentsCard"

export default {
    title: "Button visualizations",
    component: ShowButton,
}


export const ShowButtonMultipleCardsStory = {
    render: (args) => <ShowButton {...args}/>,
    args: {
        hideMessage: "Zobrazit úkoly",
        showMessage: "Skrýt úkoly",
        component: <MultipleCards array={Assignments.all}/>
    }
}