import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MultipleInput } from './MultipleInput';
import { TaskAsyncInsert } from 'fetches/TaskAsyncActions';
import { useDispatch } from 'react-redux';


export const TaskInputModal = ({showModal, setModal, user}) => {
  const [newTask, setNewTask] = useState({userId:user.id})
  const dispatch = useDispatch()

  const handleClose = () => {
    setModal(!showModal)
  };

  const saveChanges = () => {
    console.log(newTask)
    dispatch(TaskAsyncInsert(newTask))
    setModal(false)
  }

  return (
    <div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vytvořte úkol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MultipleInput user={user} setTask={setNewTask} task={newTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={saveChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


