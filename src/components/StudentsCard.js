import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


export const StudentsCard = ({student}) => {
  return (
    <Card bg= "primary" border= "primary" style={{ width: '18rem' }}>
      <Card.Header><b>Student</b></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Jméno: {student.firstname}</ListGroup.Item>
        <ListGroup.Item>Příjmení: {student.surname}</ListGroup.Item>
        <ListGroup.Item>Studijní skupina: {student.study_group}</ListGroup.Item>
        <ListGroup.Item>Id: {student.id}</ListGroup.Item>
      </ListGroup>
      <Button variant="info">Show</Button>{' '}
    </Card>
  );
}
