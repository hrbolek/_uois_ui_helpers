import { StudentsCard } from "../components/StudentsCard";
import { Students } from "./DataStructures";


export default {
    title: "Card visualizations",
    component: StudentsCard,

}

export const StudentsCardStory = {
    render: (args) => <StudentsCard {...args}/>,
    args : {
        student: Students.all[0]
    }
}