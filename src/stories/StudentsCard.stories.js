import { StudentsCard} from "../components/StudentsCard";
import { SingleUser } from "./DataStructures";


export default {
    title: "Card visualizations",
    component: StudentsCard,

}

export const StudentsCardStory = {
    render: (args) => <StudentsCard{...args}/>,
    args : SingleUser
}