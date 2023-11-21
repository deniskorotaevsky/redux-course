import { useState } from 'react';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
    }

  }

  return (
    <div className='app'>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {
          todos.map(todo => <li key={todo.id}>
            <input type='checkbox' />
            <span>{todo.text}</span>
            <span className='delete'>&times;</span>


          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
