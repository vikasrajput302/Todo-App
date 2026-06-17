import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {
  return (
    <div className='border border-gray-300 rounded bg-white px-2 py-2 md:px-4 md:py-3 flex flex-col gap-2'>
      <p className='text-purple-600 text-lg font-medium'>Todo List</p>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>

    </div>
  )
}

export default TodoList