import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useState } from "react";

const HomePage = () => {
  const [ todo, setTodo ] = useState([]);

  const addTodo = (task)=>{
      setTodo([ ...todo, { text: task, completed: false } ])
  }

  const toggleTodo = (index) => {
    const updated = [...todo];
    updated[index].completed = !updated[index].completed;
    setTodo(updated);
  };

  const deleteTodo = (index) => {
    const updated = todo.filter((_, i) => i !== index);
    setTodo(updated);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-black p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-teal-400">My Todo App</h1>
      <p className="mb-6 text-gray-300">Total tasks: {todo.length}</p>
      
      <TodoInput onAdd={ addTodo } />
      <TodoList todo={ todo } onToggle={ toggleTodo } onDelete={ deleteTodo } />
    </div>
  )
}

export default HomePage