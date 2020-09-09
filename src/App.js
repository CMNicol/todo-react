import React, {useState, useEffect} from 'react';
import Todo from './Todo.js';
import AddTodo from './AddTodo.js';
import './App.css';


const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await fetch(`http://127.0.0.1:8000/retrieve/`);
    const data = await response.json();
    setTodos(data.todos);
  }

  return (
    <div>
      <h1>Todos</h1>
      <div className="Row">

          <div>
            {todos.map(todo => (<Todo title={todo.title} description={todo.description} status={todo.status.toString()}/>))}
          </div>

          <div>
            <AddTodo />
          </div>

      </div>
     
    </div>
      );
};

export default App;

