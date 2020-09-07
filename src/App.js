import React, {useState, useEffect} from 'react';
import Todo from './Todo';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    var response = '{"number of todos": 3, "number complete": 1, "number incomplete": 2,' +
    '"todos": [' +
    '{"id": 1, "title": "Todo Number 1", "description": "Description 1", "status": true},' +
    '{"id": 2, "title": "Todo Number 2", "description": "Description 2", "status": false},' + 
    '{"id": 3, "title": "Todo Number 3", "description": "Description 3", "status": false}' + 
    ']}';
  
  var data =  JSON.parse(response);
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

