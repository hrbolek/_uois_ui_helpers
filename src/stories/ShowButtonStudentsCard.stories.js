import { MultipleCards } from "../components/MultipleCards"
import { AssignmentsCard } from "../components/AssignmentsCard"
import {ShowButton} from "../components/ShowButton"
import { Assignments, Students } from "./DataStructures"
import { Card } from "react-bootstrap"
import { StudentsCard } from "../components/StudentsCard"

export default {
    title: "Button visualizations",
    component: ShowButton,
}


export const ShowButtonStudentsCardStory = {
    render: (args) => <ShowButton {...args}/>,
    args: {
        hideMessage: "Zobrazit studenta",
        showMessage: "Skrýt studenta",
        component: <StudentsCard student={Students.all[0]}/>
    }
}