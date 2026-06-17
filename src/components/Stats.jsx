import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Stats = () => {
  return (
    <div className=' w-full flex flex-col gap-3 border border-gray-300 rounded px-2 py-2 bg-white'>
      <p className='font-medium  text-purple-600 uppercase'>Statistics</p>
      <div  className='flex w-full    gap-1 md:gap-2'>
        <div className='flex items-center gap-2 md:gap-4 border border-gray-300 justify-center py-2 px-4  w-1/2 rounded-lg '>
         <div className='rounded-xl bg-purple-100 md:px-2 md:py-2 py-1  px-1 text-purple-600 '> <RxHamburgerMenu size={22}/></div><div className='leading-tight font-medium text-lg '> 12<br /><span className='text-sm font-medium text-gray-500 '>Total</span></div>

        </div>

         <div  className='flex items-center gap-2 md:gap-4 border border-gray-300 justify-center py-2 px-4  w-1/2 rounded-lg'>
         <div className='rounded-3xl bg-green-100 py-1 px-1 md:px-2 md:py-2 text-green-600 '> <IoCheckmarkCircleOutline size={22}/></div><div className='leading-tight font-medium text-lg '> 5<br /><span className='text-sm font-medium text-gray-500'>Completed</span></div>

        </div>

         <div  className='flex items-center gap-2 md:gap-4 border border-gray-300 justify-center py-2 px-4 w-1/2 rounded-lg'>
         <div className='rounded-xl bg-yellow-50 py-1 px-1 md:px-2 md:py-2 text-yellow-500 '> <GoClock size={20}/></div><div className='leading-tight font-medium text-lg '> 12<br /><span className='text-sm font-medium text-gray-500'>Pending</span></div>

        </div>
        
      </div>
    </div>
  )
}

export default Stats