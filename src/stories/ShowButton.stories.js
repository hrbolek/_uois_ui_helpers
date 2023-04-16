import { MultipleCards } from "../components/MultipleCards"
import { AssignmentsCard } from "../components/AssignmentsCard"
import {ShowButton} from "../components/ShowButton"
import { Assignments } from "./DataStructures"
import { Card } from "react-bootstrap"

export default {
    title: "Button visualizations",
    component: ShowButton,
}


export const ShowButtonStory = {
    render: (args) => <ShowButton {...args}/>,
    args: {
        hideMessage: "Zobrazit úkoly",
        showMessage: "Skrýt úkoly",
        component: <MultipleCards array={Assignments.all}/>
    }
}