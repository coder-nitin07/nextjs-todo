import TodoInput from "@/components/TodoInput";
import { useState } from "react";

const HomePage = () => {
  const [ todo, setTodo ] = useState([]);

  const addTodo = (task)=>{
      setTodo([ ...todo, { text: task, completed: false } ])
  }
  return (
    <>
      <h1>My Todo App</h1>
      <p>Total tasks: { todo.length }</p>
      <TodoInput onAdd={ addTodo } />
    </>
  )
}

export default HomePage