import React, { useState } from 'react';
import './ToDoList.css';
import logo from './logow.png';


function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="container">
        <div className="logo-container">
      <img className="logo" src={logo} alt="Logo" />
    </div>
      <h2 className="header">Todo List</h2>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new item"
        />
        <button className="add-button" onClick={handleAddItem}>Add</button>
      </div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li className="todo-item" key={index}>
            <span className="todo-text">{item}</span>
            <button className="delete-button" onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default TodoList;
