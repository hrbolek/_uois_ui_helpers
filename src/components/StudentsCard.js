import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';


export const StudentsCard = ({student}) => {
  return (
    <Card bg= "primary" border= "primary" style={{ width: '18rem' }}>
      <Card.Header>Student</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><b>Jméno:</b> {student.firstname}</ListGroup.Item>
        <ListGroup.Item>Příjmení: {student.surname}</ListGroup.Item>
        <ListGroup.Item>Study Group: {student.study_group}</ListGroup.Item>
        <ListGroup.Item>id: {student.id}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
