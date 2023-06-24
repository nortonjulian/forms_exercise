import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


function TodoList() {
    const [todos, setTodo] = useState([])

    const addTodo = (newTodo) => {
        setTodo([...todos, newTodo])
    }

    const removeTodo = (index) => {
        const updatedTodos = [...todos]
        updatedTodos.splice(index, 1)
        setTodo(updatedTodos)
    }

    return (
        <div>
            <h2>Todo List</h2>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    task={todo.task}
                    index={index}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default TodoList
