import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../redux/actions/todoActions';
import './TodoList.css'; // Import the CSS file

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText }));
      setTodoText('');
    }
  };

  const handleUpdateTodo = (id, text) => {
    const updatedText = prompt('Edit Todo:', text);
    if (updatedText) {
      dispatch(updateTodo(id, { text: updatedText }));
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-button">
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button
                onClick={() => handleUpdateTodo(todo.id, todo.text)}
                className="todo-edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="todo-delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
