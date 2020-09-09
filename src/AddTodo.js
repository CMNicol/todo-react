import React from 'react';
import './App.css'


const AddTodo = () => {
    return (
        
        <div className ="AddTodo">
            <h1>Add a Todo</h1>    
            <div className="Row">
                <p>Title</p>
                <input type="text"/>
            </div>
            <button>Add</button>
        </div>
        
    );
}

export default AddTodo;