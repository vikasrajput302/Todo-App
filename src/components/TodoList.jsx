import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({todos,setTodos}) => {
  
  return (
    <div className='border border-gray-300 rounded bg-white px-2 py-2 md:px-4 md:py-3 flex flex-col gap-2'>
      <p className='text-purple-600 text-lg font-medium'>Todo List</p>
    {todos.map((elem,idx)=>{
    return  <TodoCard key={idx} elem={elem} todos={todos} setTodos={setTodos} />
      
    })}

    </div>
  )
}

export default TodoList