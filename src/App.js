import React, {useState, useEffect} from 'react';
import Todo from './Todo';


function App() {

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
      {todos.map(todo => (<Todo title={todo.title} description={todo.description}/>))}
    </div>
  );
}

export default App;

