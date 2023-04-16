import { Card, Row, Table } from "react-bootstrap"
import { Link } from "react-bootstrap-icons"


function pointsRender(points) {
    if (points > 0) {
        return (
            <tr>
                <td>počet bodů</td>
                <td>{points}</td>
            </tr>
        )
    }
}

export const AssignmentsCard = ({subject, name, points, deadline, description, link}) => {
    const deadline_date = Date.parse(deadline)
    const today = new Date().getTime()
    
    let deadline_color = "red"
    if (today < deadline_date) { //deadline in the future
        deadline_color = "green"
    }

    return (
        <Card key="info" bg="info" text="light" style={{width: "20rem", textAlign:"center"}}>
            <Card.Header>{subject} - {name}</Card.Header>
            <Card.Body>
                <Table style={{color: "white"}}>
                    <tr>
                        <td>datum odevzdání</td>
                        <td style={{color: deadline_color}}>{deadline}</td>
                    </tr>
                    {pointsRender(points)}
                </Table>

                <Card style={{color:"black"}}>
                    {description}
                </Card>

                <a href={link} target="_blank">odevzdání</a>
            </Card.Body>
        </Card>
    )

}