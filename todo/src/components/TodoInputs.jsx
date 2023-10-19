import React from 'react';
import { FaBook } from 'react-icons/fa';
import "./TodoInput.css";

const TodoInputs = ({item, handleChange, handleSubmit}) => {
  return (
    <div className="card formSpace px-3 py-1 ">
      <form onSubmit={handleSubmit} className='form'>
        
               <input type='text' className='form-control border-0
                text-capitalize' placeholder='add a todo item'
              value={item} onChange={handleChange} />
              
              <button type='submit' className='btn  btn-primary '>add</button>
              
          
        </form>
    </div>
  )
}

export default TodoInputs