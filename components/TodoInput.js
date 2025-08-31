import { useState } from "react"

const TodoInput = ({ onAdd }) => {
  const [ task, setTask ] = useState('');

  const handleAdd = ()=>{
        if(task.trim() === '') return;
        onAdd(task)
        setTask('');
  };
  return (
    <div className="flex gap-3 mb-6">
        <input
            type='text'
            placeholder='Enter a task'
            value={ task }
            onChange={(e)=> setTask(e.target.value) }
            className="border p-2 rounded w-64 text-white"
        />

        <button 
            onClick={ handleAdd }
            className="bg-teal-600 cursor-pointer transform outline-none text-white px-4 py-2 rounded hover:bg-teal-900"
        >
            Add
        </button>
    </div>
  )
}

export default TodoInput