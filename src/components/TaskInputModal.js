import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MultipleInput } from './MultipleInput';

export const TaskInputModal = ({showModal, setModal, readOnly, userName, userSurname}) => {
  const handleClose = () => {
    setModal(!showModal)
  };

  return (
    <div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vytvořte úkol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MultipleInput readOnly={readOnly} userName={userName} userSurname={userSurname}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


