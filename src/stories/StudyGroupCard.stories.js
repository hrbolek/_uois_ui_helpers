import { StudyGroupCard } from "../components/StudyGroupCard";
import { StudyGroups } from "./DataStructures";

export default {
    title: "Study Groups",
    component: StudyGroupCard,
}


export const StudentsGroupCardStory = {
    render: (args) => <StudyGroupCard {...args}/>,
    args: StudyGroups.all[0]
}