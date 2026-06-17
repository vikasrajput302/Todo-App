import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
// import { IoIosArrowRoundForward } from "react-icons/io";


const FilterBAr = () => {
  return (
    <div className='flex justify-between gap-5  '>
        <div className='border bg-white border-gray-300 py-2 px-2 w-full rounded-lg'>
            <p className='text-lg font-medium text-purple-600 px-2 uppercase '>Filter</p>
            <div className='px-2 py-3 flex flex-col gap-4'>
                <button className='flex items-center gap-2 font-medium text-purple-600 border border-purple-300 rounded bg-purple-100 py-2 px-2'><RxHamburgerMenu size={22} />All</button>
                <button className='flex items-center gap-2 font-medium px-2'><IoIosCheckmarkCircleOutline size={22} color='green'/>Completed</button>
                <button className='flex items-center gap-2 font-medium px-2'><GoClock size={21} color='red'/>Pending</button>
            </div>
        </div>
        <div className='border bg-white border-gray-300 py-2 px-2 w-full rounded-lg'>
            <p className='text-lg font-medium text-purple-600 px-2 uppercase' >Sort By Priority</p>
               <div  className='px-2 py-3 flex flex-col gap-4'>
                  <div className='flex items-center justify-between  border border-purple-300 rounded bg-purple-100 py-2 px-2'>
                      <label htmlFor="" className='flex items-center gap-4 font-medium'><HiArrowTrendingUp color='red'size={22}/>High → Low</label>
                     <input className='accent-purple-600' type="radio" name="sort" value="highToLow" />
                  </div>

                  <div className='flex items-center justify-between px-2'>
                     <label htmlFor="" className='flex items-center gap-4 font-medium ' ><HiArrowTrendingDown color='green' size={22}/>Low → High</label>
                     <input   className='accent-purple-600' type="radio" name="sort" value="lowToHigh" />
                  </div>
              </div>

         </div>
    </div>
  )
}

export default FilterBAr