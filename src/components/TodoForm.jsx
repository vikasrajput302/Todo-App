import React from 'react'
import { FiPlus } from "react-icons/fi";


const TodoForm = () => {
  return (
    <div className='border border-gray-300 bg-white rounded px-4 py-4 flex flex-col gap-4 '>
        <h1 className='text-purple-600 font-medium text-lg'>Add New Todo</h1>
        <form action="" className='flex flex-col gap-4'>
            <input className='outline-none border border-gray-300 rounded px-4 py-2 text-gray-600 font-medium'
             type="text" placeholder='Title' />
            <textarea className='outline-none border border-gray-300 rounded px-4 py-2 text-gray-600 font-medium'
              name="" id="" placeholder='Description'></textarea>
            <div className='flex justify-start items-center gap-5'>
              <p className='text-lg font-medium'>Priority:</p>
              
         <div className=' border border-green-200 text-green-600 bg-green-100 rounded px-4 py-1 font-medium text-sm'>
                <input className='mr-2' type="radio" name='priority' value="high"/>
               <label htmlFor="">
                High</label>
         </div>
             
             <div  className='border border-yellow-200 text-yellow-500 bg-yellow-50 rounded px-4 py-1 font-medium '>
                 <input className='mr-2' type="radio" name='priority' value="medium"/>
               <label htmlFor="">
                Medium</label>
             </div>
             <div className='border border-red-200 text-red-500 bg-red-100 rounded px-4 py-1 font-medium '>
              
              <label htmlFor="">
                 <input className='mr-2' type="radio" name='priority' value="low"/>
                 Low</label>
             </div>
            </div>
            <button className='w-full bg-purple-600 rounded py-2 text-white font-medium text-lg'>+ Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm