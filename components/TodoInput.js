import { useState } from "react"

const TodoInput = ({ onAdd }) => {
  const [ task, setTask ] = useState('');

  const handleAdd = ()=>{
        if(task.trim() === '') return;
        onAdd(task)
        setTask('');
  };
  return (
    <div>
        <input
            type='text'
            placeholder='Enter a task'
            value={ task }
            onChange={(e)=> setTask(e.target.value) }
        />

        <button onClick={ handleAdd }>Add</button>
    </div>
  )
}

export default TodoInput