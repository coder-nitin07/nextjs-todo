
const TodoList = ({ todo, onToggle, onDelete }) => {
  return (
    <ul className="w-96 space-y-3">
        { todo.map((item, index)=>(
            <li key={ index } className="flex justify-between items-center bg-gray-800 shadow p-3 rounded-lg">
                <span
                    className={`flex-1 ${
                        item.completed ? "line-through text-gray-400" : "text-white font-medium"
                    }`}
                >
                    { item.text }
                </span>

                <button 
                    onClick={()=> onToggle(index) }
                    className="text-sm bg-green-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                >
                    { item.completed ? 'Undo' : 'Complete' }
                </button>

                <button 
                    onClick={()=> onDelete(index) }
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </li>
        )) }
    </ul>
  )
}

export default TodoList