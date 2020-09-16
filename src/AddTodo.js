import React from 'react';
import './App.css'
import TodoModel from './TodoModel';



const AddTodo = ({ titleInputText, setTitleInputText }) => {
    
    const textInputHandler = (e) => {
        e.preventDefault();
        setTitleInputText(e.target.value);
    }

    const submitHandler = () => {
        TodoModel.add(titleInputText);
        setTitleInputText("");
    }

    return (
        
        <div className ="AddTodo">
            <h1>Add a Todo</h1>    
            <div className="Row">
                <p>Title</p>
                <input type="text" onChange={textInputHandler} value={titleInputText}/>
            </div>
            <button type="submit" onClick={submitHandler}>Add</button>
        </div>
        
    );
}

export default AddTodo;