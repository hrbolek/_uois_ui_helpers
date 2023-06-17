import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export const WriteInput = ({name, username, readOnly, setTaskAtribute}) => {
  const handleChange = (event) => {
    setTaskAtribute(event.target.value)
  }

  const readOnlyInput = () => {
    if (readOnly) {
      return (
        <input type="text" className="form-control" defaultValue={username} readOnly />
      )
    } else {
      return (
        <input type="text" className="form-control"  placeholder={name} onChange={handleChange}/>
      )
    }
  }

  return (
      <form>
        <div className="form-group">
          <small className="form-text text-muted">Zadejte {name}</small>
          {readOnlyInput()}
        </div>


      </form>
  )
}

//<input type="email" className="form-control" defaultValue={props.name} readOnly />