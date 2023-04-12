import { EmailShow } from "../components/UserEmail";
import { SingleUser } from "./DataStructures";

export default {
    title: "User visualizations",
    component: EmailShow,

}

export const EmailShowStory = {
    render: (args) => <EmailShow {...args}/>,
    args : SingleUser
}