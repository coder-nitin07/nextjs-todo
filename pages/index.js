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
    <>
      <h1>My Todo App</h1>
      <p>Total tasks: { todo.length }</p>
      <TodoInput onAdd={ addTodo } />
      <TodoList todo={ todo } onToggle={ toggleTodo } onDelete={ deleteTodo } />
    </>
  )
}

export default HomePage