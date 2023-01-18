import { Link } from "react-router-dom";
import { Envelope } from "react-bootstrap-icons";
export const root = '/ui';
export const grouproot = root + '/groups';
export const userroot = root + '/users';

export const GroupLink = ({group}) => {
    return <Link to={grouproot + '/' + group.id}>{group.name}</Link>
}

export const UserLink = ({user, email}) => {

    if (email) {
        return (
        <>
        <Link to={userroot + '/' + (user.id)}>{user.surname} {user.name} </Link>
        <a href={"mailto:" + user.email}><Envelope /></a>
        </>
        )
    } else {
        return <Link to={userroot + '/' + user.id}>{user.surname} {user.name}</Link>
    }
}
