import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterBAr from './components/FilterBAr'
import TodoForm from './components/TodoForm'
import Stats from './components/Stats'
import TodoList from './components/TodoList'


const App = () => {

  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Complete React Hooks Tutorial",
    description: "Learn useState and useEffect concepts",
    completed: false,
    priority: "High",
    createdAt: "2026-06-10",
  },
  {
    id: 2,
    title: "Build Weather App",
    description: "Fetch weather data using API",
    completed: true,
    priority: "Medium",
    createdAt: "2026-06-11",
  },
  {
    id: 3,
    title: "Practice JavaScript Array Methods",
    description: "Revise map, filter, and reduce",
    completed: false,
    priority: "High",
    createdAt: "2026-06-12",
  },
  {
    id: 4,
    title: "Design Portfolio Homepage",
    description: "Create responsive UI with CSS",
    completed: false,
    priority: "Medium",
    createdAt: "2026-06-13",
  },
  {
    id: 5,
    title: "Read React Documentation",
    description: "Understand component lifecycle",
    completed: true,
    priority: "Low",
    createdAt: "2026-06-14",
  },
  {
    id: 6,
    title: "Create Login Page",
    description: "Implement form validation",
    completed: true,
    priority: "High",
    createdAt: "2026-06-15",
  },
  {
    id: 7,
    title: "Build Todo App",
    description: "Practice CRUD operations",
    completed: false,
    priority: "Medium",
    createdAt: "2026-06-16",
  },
  {
    id: 8,
    title: "Learn Context API",
    description: "Manage global state in React",
    completed: false,
    priority: "Low",
    createdAt: "2026-06-17",
  },
]
)
  return (
    
    <div>
      <Navbar/>
      <div className='px-3 py-4 md:px-6 md:py-6 flex flex-col gap-5'>
        <SearchBar/>
        <FilterBAr/>
        <TodoForm todos={todos} setTodos={setTodos} />
        <Stats todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos ={setTodos}/>
      </div>
    </div>
  )
}

export default App