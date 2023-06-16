import { element } from "prop-types";
import { AssignmentsCard } from "./AssignmentsCard"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../stories/DataStructures"

//const array = Assignments.all
//multiplecard
export const MultipleCards = (props) => {
    console.log(props.length)
    return (

        <CardGroup>

            {props.array?.map((element) => <AssignmentsCard {...element} />)}
        </CardGroup>
    )
}   