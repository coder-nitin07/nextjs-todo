
const TodoList = ({ todo, onToggle, onDelete }) => {
  return (
    <ul>
        { todo.map((item, index)=>(
            <li key={ index }>
                <span
                    style={{ textDecoration: item.completed ? 'line-through' : 'none', marginRight: '10px' }}
                >
                    { item.text }
                </span>

                <button onClick={()=> onToggle(index) }>
                    { item.completed ? 'Undo' : 'Complete' }
                </button>

                <button onClick={()=> onDelete(index) } style={{ marginLeft: '5px' }}>
                    Delete
                </button>
            </li>
        )) }
    </ul>
  )
}

export default TodoList