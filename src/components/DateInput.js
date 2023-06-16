import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//creating a date input 
export const DateInput = (props) => {
  return (
    <>
      <InputGroup className="mb-1">
        <InputGroup.Text className="text-end" style={{ width: props.width}}>
          {props.name}
        </InputGroup.Text>
        <Form.Control
          aria-label= {props.name}
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </>
  );
}