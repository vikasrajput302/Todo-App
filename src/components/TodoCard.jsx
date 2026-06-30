import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";

const TodoCard = ({elem,todos,setTodos,setShowEdit,setEditID}) => {

const handleOnChange = (e)=>{
  const newTodo = todos.map((todo,idx)=>{
  if (todo.id == elem.id) {
   
  return {...todo,completed : e.target.checked};
    
  }
  return todo;
})

setTodos(newTodo);

}

const handleRemove = (e)=>{
  const removeTodo = todos.filter((todo,idx)=>{
    if (todo.id != elem.id) {
      return todo;
      
    }
  })
  setTodos(removeTodo);

}

console.log(elem.completed);

  return (
    <div className='flex justify-between gap-8  border border-gray-300 rounded-lg md:py-3 md:px-6 py-1 px-3 items-center'>
     
        <div className=' flex items-start gap-2 md:gap-4 '>
          <input onChange={(e)=>{handleOnChange(e);
          }}  checked={elem.completed} type="checkbox" className=' accent-green-600 mt-3 scale-125 md:scale-150'   />
          <div className=''>
            <label  className={`${(elem.completed)? "line-through font-semibold md:text-xl tracking-tight  " : "font-semibold md:text-xl tracking-tight"}`} >{elem.title}</label>
            <p className={`${elem.completed ? "line-through text-gray-500 text-sm md:text-lg font-medium leading-tight" : "text-gray-500 text-sm md:text-lg font-medium leading-tight"}`}>{elem.description}</p>
            <div className=' flex gap-4 py-2 md:gap-10 '>
              <div className={`${(elem.priority == "high")? " border-green-300 rounded bg-green-50 text-green-500 " : (elem.priority == "low")? "border-red-300 rounded bg-red-50 text-red-500 ":" border-yellow-300 rounded bg-yellow-50 text-yellow-500 " } border font-medium px-2 md:px-3 py-1 text-sm`}>{elem.priority}</div>
              <div className='flex items-center  gap-1 text-gray-500 text-sm font-medium'><CiCalendarDate size={20} color='#111'/>{elem.createdAt} </div>
            </div>
          </div>
        </div>
      
      <div className='flex justify-between gap-2 md:gap-8 md:px-4 items-center '>
        <button
        onClick={(e)=>{
          setEditID(elem.id)
          setShowEdit(true)
        }}
        className='border border-purple-600 bg-purple-50 flex items-center  md:gap-2 py-1 px-2 md:px-4 md:py-2 rounded text-purple-600 font-medium text-sm'><MdOutlineEdit /> <span className='hidden md:block md:text-lg'>Edit</span></button>
        
        <button onClick={(e)=> handleRemove(e)
        }
         className='border border-red-600 bg-red-50  flex items-center  md:gap-2 py-1 px-2 md:px-4 md:py-2 rounded text-red-600 font-medium text-sm'><RiDeleteBin5Line/><span className='hidden md:block md:text-lg'>Delete</span></button>

      </div>
    </div>
  )
}

export default TodoCard