import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const WriteInput = (props) => {
  return (
    <>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
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