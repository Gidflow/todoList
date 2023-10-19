import React from 'react';
import {  FaTrash, FaTimes } from 'react-icons/fa';
import {MdCancel, MdDeleteForever, MdCheck} from "react-icons/md"
import "./TodoItems.css"


const TodItem = ({todo, removeTodo, status, statusUp}) => {
  return (
    <>
   <div className='item'>
     <div className="icon-items">
      <div className="icon-P">
        {status?<MdCheck className='text-success cancel' onClick={statusUp}/> 
        :<MdCancel className='text-primary cancel' onClick={statusUp}/>}
       
        <p className={`${status && "text-decoration-line-through"} text-secondary text-capitalize`}>{todo}</p>
      </div>
      <div>
        <MdDeleteForever className='text-danger' 
        onClick={removeTodo}/>
      </div>
     </div>
   </div>
   <div className='border'>

     </div>
   </>
  )
}

export default TodItem