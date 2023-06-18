import { useState } from "react"
import { GroupTaskInputs } from "./GroupTaskInputs"
import { Button, Modal } from 'react-bootstrap';

export const GroupTaskInputModal = ({showModal, setModal, group, actions, memberships}) => {
    const [newTask, setNewTask] = useState()

    const handleClose = () => {
        setModal(false)
        setNewTask()
    }

    const saveChanges = () => {
        //for loop memberships, to newTask add {userId: member.id}, call actions.addTask(newTask)
        
        const iterTask = newTask
        memberships.map(member => {
            actions.addTask({...iterTask, userId:member.user.id})
        })
        handleClose()
    }

    return (
        <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Vytvořte úkol</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GroupTaskInputs group={group} setTask={setNewTask} task={newTask}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={saveChanges}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}