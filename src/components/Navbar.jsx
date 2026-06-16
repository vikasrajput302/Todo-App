import React from 'react'
import { IoCheckbox } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-purple-700 text-white gap-1 py-4 md:justify-start md:px-6'>
        < IoCheckbox size={28}/>
        <h1 className='uppercase text-2xl'>Todo App</h1>
    </div>
  )
}

export default Navbar