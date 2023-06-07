import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export const WriteInput = (props) => {

  return (
      <form>
        <div className="form-group">
          <small className="form-text text-muted">Zadejte {props.name}</small>
          <input type="email" className="form-control"  placeholder={props.name} />
        </div>


      </form>
  )
}