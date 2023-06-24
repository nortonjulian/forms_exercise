import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            task: task
        });
        setTask('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Todo:</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
