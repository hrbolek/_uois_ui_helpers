import { element } from "prop-types";
import { AssignmentsCard } from "./AssignmentsCard"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../stories/DataStructures"

//const array = Assignments.all

export const MultipleCards = ({array}) => {
    return (

        <CardGroup>

            {array?.map((element) => <AssignmentsCard {...element} />)}
        </CardGroup>
    )
}   