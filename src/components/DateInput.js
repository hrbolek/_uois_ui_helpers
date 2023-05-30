import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function DateInput() {
  return (
    <>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Date
        </InputGroup.Text>
        <Form.Control
          aria-label="Date"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </>
  );
}