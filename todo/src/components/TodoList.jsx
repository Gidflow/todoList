import React from 'react'
import TodItem from './TodItem'
const TodoList = ({items, clear, removedTodo}) => {
    console.log(items);
  return (
    <ul className="list-group my-5">
    <h3 className='text-capitalize text-center'>
        todo list
    </h3>
    {items.map(item=>{
      return  <TodItem key={item.id} title={item.todo} 
      removedTodo={()=>removedTodo(item.id)}/>
    })}
    
    <button type='button' className='btn btn-block btn-danger 
    text-capitalize text-center mt-5' onClick={clear}>Delete</button>
    </ul>
  )
}

export default TodoList