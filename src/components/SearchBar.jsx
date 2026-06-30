import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({query,setQuery}) => {

  

  return (
    <div onChange={(e)=>{
      setQuery(e.target.value)
    }} value={query} className='flex items-center gap-2 px-2 py-2 border-2 rounded-xl bg-white border-gray-300 md:rounded-3xl md:px-10 text-lg font-medium '>
      <IoSearchOutline size={22} color='gray' />  <input

      className=' outline-none w-[100%] text-gray-600' type="search" placeholder='Search Todos...' />
    </div>
  )
}

export default SearchBar