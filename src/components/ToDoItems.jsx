import React from 'react';

function ToDoItems({ text, id, onDelete }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px', // Optional: Add some spacing between items
  };

  return (
    <div style={containerStyle}>
      <li>{text}</li>
      <button onClick={() => onDelete(id)}>
        <span>Delete</span>
      </button>
    </div>
  );
}

export { ToDoItems };
