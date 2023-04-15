import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const StudentsCard= (props) => {
    function ListGroupWithHeaderExample() 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>StudentsCard</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Starting year:</ListGroup.Item>
        <ListGroup.Item>Finishing year:</ListGroup.Item>
        <ListGroup.Item>Study Group:</ListGroup.Item>
        <ListGroup.Item>id:</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;