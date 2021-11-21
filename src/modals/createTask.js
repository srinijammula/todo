import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './createTask.css'

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        save(taskObj)
        setTaskName(' ')
    }
    const d= new Date().toLocaleString();
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="noborder"><h5 className="lead mb-0">{d}</h5></ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <input type="text" className = "form-control m-0 inputmod" placeholder="Add task" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
            </ModalBody>
            <ModalFooter className="noborder">
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;