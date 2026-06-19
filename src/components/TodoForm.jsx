import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";


const TodoForm = ({todos,setTodos}) => {

  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(title);
    

    const newTodo  =  {
      id: Date.now(),
      title,
      description,
      priority,
      completed : false,
      createdAt : new Date().toISOString().split("T")[0],
    };

    setTodos((prev => [...prev , newTodo]))
    console.log(todos);
    
    

    // setTitle('')
    // setDescription("")
    // setPriority("")

  }
  
  return (
    <div className='border border-gray-300 bg-white rounded px-4 py-4 flex flex-col gap-4 '>
        <h1 className='text-purple-600 font-medium text-lg'>Add New Todo</h1>
        <form onSubmit={(e)=>handleSubmit(e)} action="" className='flex flex-col gap-4'>
            <input onChange={(e)=>{
            
              setTitle(e.target.value);
            }}
            value={title}
             required className='outline-none border border-gray-300 rounded px-4 py-2 text-gray-600 font-medium'
             type="text" placeholder='Title' />
            <textarea 
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            value={description}
            required className='outline-none border border-gray-300 rounded px-4 py-2 text-gray-600 font-medium'
              name="" id="" placeholder='Description'></textarea>
            <div className='flex justify-start items-center gap-2 md:gap-8'>
              <p className='md:text-lg font-medium'>Priority:</p>
              
         <div className=' border flex border-green-200 text-green-600 bg-green-100 rounded px-4 py-1 font-medium text-sm'>
                <input 
                onChange={(e)=>{setPriority(e.target.value)}}
                
                required className='mr-2 accent-green-600 ' type="radio" name='priority' value="high"/>
               <label >
                High</label>
         </div>
             
             <div  className='border flex border-yellow-200 text-yellow-500 bg-yellow-50 rounded px-4 py-1 font-medium text-sm'>
                 <input onChange={(e)=>{setPriority(e.target.value)}}
                 required className='mr-2 accent-yellow-700  ' type="radio" name='priority' value="medium"/>
               <label >
                Medium</label>
             </div>
             <div className='border flex border-red-200 text-red-500 bg-red-100 rounded px-4 py-1 font-medium text-sm '>
              
                 <input onChange={(e)=>{setPriority(e.target.value)}}
                  required className='mr-2 accent-red-600 ' type="radio" name='priority' value="low"/>
              <label>
                 Low</label>
             </div>
            </div>
            <button className='w-full bg-purple-600 rounded py-2 text-white font-medium text-lg'>+ Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm