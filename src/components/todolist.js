import React,{useState} from 'react';
import CreateTask from '../modals/createTask';
import Card from './Card';
import './todolist.css'

function Todolist() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <div>
            <div className = "task-container">
            {taskList.map((obj,index) => <Card index={index} taskList={obj}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            <div className = "text-center mb-5 footer fixed-bottom">
                <button className = "btn btn-lg btn-primary mt-2 rounded-circle" onClick = {() => setModal(true)}><i class="fas fa-plus"></i></button>
            </div>
        </div>
    )
}

export default Todolist
