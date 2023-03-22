import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import { UserLink } from './Links'

const RoleRow = (props) => {
    const { roletype, user } = props
    return (
        <tr>
            <td>{props.index}</td>
            <td>{roletype.name}</td>
            <td><UserLink user={user}/></td>
        </tr>
    )
}

export const RowRolesTable = (props) => {
    const { group } = props
    const roles = group.roles
    return (
        <>
        {roles?.map(
            (r, index) => <RoleRow key={r.id} index={index} {...r} />
        )}
        </>
    )
}

export const GroupRolesTable = (props) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Role</th>
                    <th>Osoba</th>
                </tr>
            </thead>
            <tbody>
                <RowRolesTable {...props} />
            </tbody>
        </Table>
    )
}
