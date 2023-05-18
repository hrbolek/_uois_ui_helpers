import {Navbar} from "../components/Navbar";


export default {
    title: "Main menu",
    component: Navbar,

}

export const NavbarStory = {
    render: (args) => <Navbar {...args}/>,
    args : {
        
    }
}