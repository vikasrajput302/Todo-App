import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {
  return (
    <div>
      <p className='text-purple-600 text-lg font-medium'>Todo List</p>
      <TodoCard/>
    </div>
  )
}

export default TodoList