import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, setTodos, setShowEdit, setEditID }) => {
  return (
    <div className="border border-gray-300 rounded bg-white px-2 py-2 md:px-4 md:py-3 flex flex-col gap-2">
      <p className="text-purple-600 text-lg font-medium">Todo List</p>
      { todos.length < 1
        ? "No Record Found"
        : todos.map((elem, idx) => {
            return (
              <TodoCard
                key={idx}
                elem={elem}
                todos={todos}
                setTodos={setTodos}
                setShowEdit={setShowEdit}
                setEditID={setEditID}
              />
            );
          })}
    </div>
  );
};

export default TodoList;
