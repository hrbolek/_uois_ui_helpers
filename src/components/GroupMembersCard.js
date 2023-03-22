import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UserLink } from './Links'

const Role = (props) => {
    const { roletype, user } = props
    return (
        <Row>
            <Col><b>{roletype.name}</b></Col>
            <Col><UserLink user={user}/></Col>
        </Row>
    )
}

export const Members = (props) => {
    const { group } = props
    const roles = group.memberships
    return (
        <>
        {roles?.map(
            (r) => <><UserLink key={r.id} user={r} email/><br /></>
        )}
        </>
    )
}

/**
 * Renders a card containing a list of group members.
 */
export const GroupMembersCard = ({group}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Členové
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Members group={group} />
            </Card.Body>
        </Card>
    )
}

GroupMembersCard.PropTypes = {
    /**
     * defines a structure of group
     */
    group: PropTypes.any.isRequired
}