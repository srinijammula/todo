import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'

const Card=( {taskList,index} )=> {

    console.log(taskList,index)

    const colors = [
        {
            primaryColor : "#5D93E1"
        },
        {
            primaryColor : "#6f42c1"
        },
        {
            primaryColor : "#5DC250"
        },
        {
            primaryColor : "#F48687"
        },
        {
            primaryColor : "#B964F7"
        }
    ]

    return (
        <div className="card w-75 shadow d-block mx-auto mt-2">
        <div class="row">
           <div class="card-body col-9" style={{"border-left":`10px solid ${colors[index%5].primaryColor}`,"border-radius":"10px"}}>
              <h5 class="card-title text-primary"> {taskList.Name} </h5>
              </div>
              <div class="form-check m-auto col-2">
             <input class="form-check-input" type="radio"/>
             </div>
             </div>
        </div>
    )
}

export default Card;
