import React from 'react'
import "./Filter.css"
const Filter = ({filterHandler}) => {
  return (
    <div className='filter'>
        <button className='border-0 bg-white' onClick={()=>filterHandler("all")}>All</button>
        <button className='border-0 bg-white' onClick={()=>filterHandler("active")} >Active</button>
        <button className='border-0 bg-white' onClick={()=>filterHandler("completed")}>Completed</button>
    </div>
  )
}

export default Filter
