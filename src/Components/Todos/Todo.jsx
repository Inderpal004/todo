import React, { useEffect } from 'react';
import { useState } from 'react';
import './Todo.css';

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTodo = async () => {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        setTodos(data.todos);
        setLoading(false);
    }

    const handleChange = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    useEffect(() => {
        fetchTodo();
    }, [])

    return (
        <>
            <div className="todo-container">
                <h2>Todo List</h2>
                <div className="todo-div">
                    {loading ? <div>Loading....</div> : null}
                    {
                        todos.map((item, index) => {
                            return (
                                <div className="todo-item" key={index}>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={item.completed}
                                            onChange={() => handleChange(index)}
                                        />
                                        <p className={item.completed ? "line-through" : ""}>{item.todo}</p>
                                    </div>
                                    <span>{item.completed ? "True" : "False"}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
