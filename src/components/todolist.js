import React,{useState} from 'react'
import CreateTask from '../modals/createTask';

function Todolist() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <div>
            <div className = "text-center">
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "task-container">
            {taskList.map((obj) => <li>{obj.Name}</li> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </div>
    )
}

export default Todolist