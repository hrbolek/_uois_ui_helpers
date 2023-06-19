import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UserTaskInputs } from './UserTaskInputs';



export const UserTaskInputModal = ({showModal, setModal, user, actions}) => {
  const [newTask, setNewTask] = useState({userId:user.id})

  const handleClose = () => {
    setModal(false)
    setNewTask({userId:user.id})
  };

  const saveChanges = () => {
    actions.addTask(newTask)
    handleClose()
  }
  //button should not take callBack, only params what and asyncAction (via actions props)
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vytvořte úkol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserTaskInputs user={user} setTask={setNewTask} task={newTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
          <Button variant="primary" onClick={saveChanges}>Uložit úkol</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


