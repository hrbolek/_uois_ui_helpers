import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export const WriteInput = (props) => {
  const readOnlyInput = () => {
    if (props.readOnly) {
      return (
        <input type="email" className="form-control" defaultValue={props.userName} readOnly />
      )
    } else {
      return (
        <input type="email" className="form-control"  placeholder={props.name} />
      )
    }
  }

  return (
      <form>
        <div className="form-group">
          <small className="form-text text-muted">Zadejte {props.name}</small>
          {readOnlyInput()}
        </div>


      </form>
  )
}

//<input type="email" className="form-control" defaultValue={props.name} readOnly />