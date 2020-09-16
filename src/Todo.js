import React from 'react';
import './App.css'


const Todo = ({title, description, status}) => {
    return (
       
            <div className="TodoListItem">
                <h2>Title: {title}</h2>
                <p>Description: {description}</p>
                <p>Status: {status}</p>
            </div>
            
       
        
    );
}

export default Todo;