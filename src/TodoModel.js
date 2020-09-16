import React from 'react';
class TodoModel {


    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    static async add(title) {
        const newTodo = new TodoModel(title, "from react", false);
        const jsonTodo = JSON.stringify(newTodo);
        const response = await fetch(`http://127.0.0.1:8000/add/`, {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, body: jsonTodo
        });
        console.log(response.status);

    }


}

export default TodoModel;