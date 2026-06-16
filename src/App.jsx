import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterBAr from './components/FilterBAr'
import TodoForm from './components/TodoForm'
import Stats from './components/Stats'
import TodoList from './components/TodoList'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='px-3 py-4 md:px-6 md:py-6 flex flex-col gap-5'>
        <SearchBar/>
        <FilterBAr/>
        <TodoForm/>
        <Stats/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App