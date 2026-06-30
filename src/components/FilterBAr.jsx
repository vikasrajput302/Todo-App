import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
// import { IoIosArrowRoundForward } from "react-icons/io";


const FilterBAr = ({all,completed,pending,setAll,setCompleted,setPending,highToLow ,setHighToLow,lowToHigh,setLowToHigh,sortBy,setSortBy}) => {
  return (
    <div className='flex justify-between gap-5  '>
        <div className='border bg-white border-gray-300 py-2 px-2 w-full rounded-lg'>
            <p className='text-lg font-medium text-purple-600 px-2 uppercase '>Filter</p>
            <div className='px-2 py-3 flex flex-col gap-1'>
               <div className='py-2 px-2'>
                 <label htmlFor='all'  className={`flex items-center gap-2 font-medium rounded px-2 py-1 ${(all)? "text-purple-600 border border-purple-300  bg-purple-100" : "border border-black bg-white"}`}><RxHamburgerMenu size={22} />All <input onChange={(e)=>{
                    setPending(false)
                    setCompleted(false)
                    setAll(e.target.checked)

                }} className='hidden' type="radio" id='all' name='filter' /></label>
               </div>
                <div className='px-2 py-2'>
                    <label htmlFor='completed' className={`flex items-center gap-2 font-medium px-2 py-1 rounded ${(completed)? " text-purple-600 border border-purple-300  bg-purple-100" :"border border-black bg-white"}`}><IoIosCheckmarkCircleOutline size={22} color='green'/>Completed  <input  onChange={(e)=>{
                    setPending(false)
                    setAll(false)
                    setCompleted(e.target.checked)

                }} className='hidden' type="radio" id='completed' name='filter' /></label>
                </div>
           <div className='px-2 py-2'>
                 <label htmlFor='pending' className={`flex items-center gap-2 font-medium rounded px-2 py-1 ${(pending)? "text-purple-600 border border-purple-300  bg-purple-100" : "border border-black bg-white"}`}><GoClock size={21} color='red' />Pending <input  onChange={(e)=>{
                    setAll(false)
                    setCompleted(false)
                    setPending(e.target.checked)

                }} className='hidden' type="radio" id='pending' name='filter'/></label>
           </div>
            </div>
        </div>
        <div className='border bg-white border-gray-300 py-2 px-2 w-full rounded-lg'>
            <p className='text-lg font-medium text-purple-600 px-2 uppercase' >Sort By Priority</p>
               <div  className='px-2 py-3 flex flex-col gap-4'>
                  <div className={` flex items-center justify-between  py-2 px-2 rounded ${(sortBy == "h-l")? "border border-purple-300  bg-purple-100 " :" border border-black bg-white" }`}>
                      <label htmlFor='highToLow' className='w-full flex items-center gap-4 font-medium'><HiArrowTrendingUp color='red'size={22}/>High → Low <input
                     onClick={(e)=>{
                        setSortBy("h-l")
                        
                     }}
                       className='hidden' type="radio" name="sort" value="highToLow" id='highToLow'/></label>
                     
                  </div>

                  <div className={`flex items-center justify-between px-2 py-2 rounded ${(sortBy ==="l-h")? "border border-purple-300  bg-purple-100":"border border-black bg-white"} `}>
                     <label htmlFor='lowToHigh'  className='w-full flex items-center gap-4 font-medium ' ><HiArrowTrendingDown color='green' size={22}/>Low → High  <input
                    onClick={(e)=>{
                        setSortBy("l-h")
                    }}
                     id='lowToHigh'  className='hidden' type="radio" name="sort" value="lowToHigh" /></label>
                    
                  </div>
              </div>

         </div>
    </div>
  )
}

export default FilterBAr