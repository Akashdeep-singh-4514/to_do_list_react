import React, { useState } from 'react';
import './App.css';
import { InputArea } from './components/InputArea';
import { ToDoItems } from './components/ToDoItems';

function App() {
  const [Items, SetItems] = useState([]);

  const addItem = (inputText) => {
    SetItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (index) => {
    const updatedItems = [...Items];
    updatedItems.splice(index, 1);
    SetItems(updatedItems);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To do List</h1>
      </div>

      <InputArea onAdd={addItem} />
      {Items.map((item, index) => (
        <ToDoItems key={index} text={item} id={index} onDelete={deleteItem} />
      ))}
    </div>
  );
}

export { App };
