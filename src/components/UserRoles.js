import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GroupLink, UserLink } from './Links'

export const UserRoles = (props) => {
    const { user } = props
    const roles = user.roles//.filter( r => r.valid)
    //console.log('TeacherRoles')
    //console.log(JSON.stringify(TeacherRoles))
    return (

        <Card>
            <Card.Header>
                <Card.Title>
                    <UserLink user={user} />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {roles.map((item, index) => {
                    return (
                        <Row key={item.id}>
                            <Col><b>{item.roletype?.name}</b></Col>
                            <Col>{item.group? <GroupLink group={item.group} /> :""}</Col>
                        </Row>
                    )
                }
                )}
            </Card.Body>
        </Card>
            )
}
