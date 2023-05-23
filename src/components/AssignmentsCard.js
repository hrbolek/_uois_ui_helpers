import { Card, Row, Table } from "react-bootstrap"


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

export const AssignmentsCard = ({name, detailedDesc, reference, dateOfEntry, dateOfSubmission}) => {
    const today = new Date().getTime()
    let deadline_color = "red"
    if (today < dateOfSubmission) { //deadline in the future
        deadline_color = "green"
    }

    return (
        <Card key="info" bg="info" text="light" style={{width: "20rem", textAlign:"center"}}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Table style={{color: "white"}}>
                    <tr>
                        <td>datum zadání</td>
                        <td>{dateOfEntry}</td>
                    </tr>
                    <tr>
                        <td>datum odevzdání</td>
                        <td style={{color: deadline_color}}>{dateOfSubmission}</td>
                    </tr>
                </Table>

                <Card style={{color:"black"}}>
                    {detailedDesc}
                </Card>

                <a href={reference} target="_blank">odevzdání</a>
            </Card.Body>
        </Card>
    )

}