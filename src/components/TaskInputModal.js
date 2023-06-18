import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MultipleInput } from './MultipleInput';
import { TaskAsyncInsert } from 'fetches/TaskAsyncActions';
import { useDispatch } from 'react-redux';


export const TaskInputModal = ({showModal, setModal, user, actions}) => {
  const [newTask, setNewTask] = useState({userId:user.id})

  const handleClose = () => {
    setModal(false)
  };

  const saveChanges = () => {
    const tmpTask = {userId: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003", name: "newName",
      briefDes: "new brief descriptionnn", detailedDes: "new dettttt", reference: "www.google.com",
      dateOfSubmission: "2023-05-30T05:59:32.689363", dateOfFulfillment: "2023-05-30T05:59:32.689363"
    }
    //console.log(newTask)
    actions.addTask(tmpTask)
    actions.addTask(newTask)
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


