import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";

const TodoCard = () => {
  return (
    <div className='flex justify-between gap-8 border border-gray-300 rounded-lg md:py-3 md:px-6 py-1 px-3 items-center'>
     
        <div className='flex items-start gap-2 md:gap-4 '>
          <input type="checkbox" className='accent-green-600 mt-3 scale-125 md:scale-150'   />
          <div className=''>
            <label className='font-semibold md:text-xl tracking-tight ' htmlFor="">Learn React Hooks</label>
            <p className='text-gray-500 text-sm md:text-lg font-medium leading-tight'>Practice useState and useEffect</p>
            <div className='flex justify-between py-2 '>
              <div className='border border-red-300 rounded bg-red-50 text-red-500 font-medium px-2 md:px-3 py-1 text-sm'>High</div>
              <div className='flex items-center  gap-1 text-gray-500 text-sm font-medium'><CiCalendarDate size={20} color='#111'/>June 15,2026</div>
            </div>
          </div>
        </div>
      
      <div className='flex justify-between gap-2 md:gap-4 items-center '>
        <button className='border border-purple-600 bg-purple-50 flex items-center gap-1 md:gap-2 py-1 px-2 md:px-3 rounded text-purple-600 font-medium text-sm'><MdOutlineEdit /> <span className='hidden md:block'>Edit</span></button>
        <button  className='border border-red-600 bg-red-50  flex items-center gap-1 md:gap-2 py-1 px-2 md:px-3 rounded text-red-600 font-medium text-sm'><RiDeleteBin5Line/><span className='hidden md:block'>Delete</span></button>

      </div>
    </div>
  )
}

export default TodoCard