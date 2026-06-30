import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBAr from "./components/FilterBAr";
import TodoForm from "./components/TodoForm";
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import EditPopUp from "./components/EditPopUp";

const DUMMY_TODOS = [
  {
    id: 1,
    title: "Complete React Hooks Tutorial",
    description: "Learn useState and useEffect concepts",
    completed: false,
    priority: "high",
    createdAt: "2026-06-10",
  },
  {
    id: 2,
    title: "Build Weather App",
    description: "Fetch weather data using API",
    completed: true,
    priority: "medium",
    createdAt: "2026-06-11",
  },
  {
    id: 3,
    title: "Practice JavaScript Array Methods",
    description: "Revise map, filter, and reduce",
    completed: false,
    priority: "high",
    createdAt: "2026-06-12",
  },
  {
    id: 4,
    title: "Design Portfolio Homepage",
    description: "Create responsive UI with CSS",
    completed: false,
    priority: "medium",
    createdAt: "2026-06-13",
  },
  {
    id: 5,
    title: "Read React Documentation",
    description: "Understand component lifecycle",
    completed: true,
    priority: "low",
    createdAt: "2026-06-14",
  },
  {
    id: 6,
    title: "Create Login Page",
    description: "Implement form validation",
    completed: true,
    priority: "high",
    createdAt: "2026-06-15",
  },
  {
    id: 7,
    title: "Build Todo App",
    description: "Practice CRUD operations",
    completed: false,
    priority: "medium",
    createdAt: "2026-06-16",
  },
  {
    id: 8,
    title: "Learn Context API",
    description: "Manage global state in React",
    completed: false,
    priority: "low",
    createdAt: "2026-06-17",
  },
];

const App = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);

  const [sortBy, setSortBy] = useState("default");

  const [showEdit, setShowEdit] = useState(false);
  const [editID, setEditID] = useState("");

  const [query, setQuery] = useState("");
  const [filteredTodo, setFilteredTodo] = useState(todos);


  useEffect(() => {
    let newTodo = todos;
    const highPriority = todos.filter((todo)=> todo.priority == "high");
    const mediumPriority = todos.filter((todo)=> todo.priority == "medium");
    const lowPriority = todos.filter((todo)=> todo.priority == "low");

          if (sortBy == "l-h") {
      newTodo = [...lowPriority,...mediumPriority,...highPriority]
    }
    else if (sortBy == "h-l") {
       newTodo = [...highPriority,...mediumPriority,...lowPriority]
    }
     


    if (all) {
      newTodo = todos;
    }
    if (completed) {
      newTodo = newTodo.flatMap((todo, idx) => {
        if (todo.completed) {
          return todo;
        } else {
          return [];
        }
      });
    }

    if (pending) {
      newTodo = newTodo.flatMap((todo, idx) => {
        if (!todo.completed) {
          return todo;
        } else {
          return [];
        }
      });
    }

    


 


    if (query) {
      newTodo = newTodo.flatMap((todo, idx) => {
        if (todo.title.toLowerCase().includes(query.toLowerCase())) {
          return todo;
        } else {
          return [];
        }
      });
    }
    setFilteredTodo(newTodo);
  }, [query, all, completed, pending,editID,todos.length,sortBy]);

  
  
  return (
    <div className="relative">
      <Navbar />
      <div className="px-3 py-4 md:px-6 md:py-6 flex flex-col gap-5">
        <SearchBar query={query} setQuery={setQuery} />
        <FilterBAr
          all={all}
          setAll={setAll}
          completed={completed}
          setCompleted={setCompleted}
          pending={pending}
          setPending={setPending}
          setSortBy={setSortBy}
          sortBy = {sortBy}
        />
        <TodoForm todos={todos} setTodos={setTodos} />
        <Stats todos={todos} setTodos={setTodos} />
        <TodoList
          todos={filteredTodo}
          setTodos={setTodos}
          setShowEdit={setShowEdit}
          setEditID={setEditID}
        />
      </div>
      {showEdit && (
        <EditPopUp
          editID={editID}
          setEditID={setEditID}
          todos={todos}
          setTodos={setTodos}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default App;
