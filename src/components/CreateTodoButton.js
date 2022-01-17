import React from "react";
import '../styles/components/dist/_TodoButton.css';

const CreateTodoButton = (props) => {
  return (
    <button 
      className="todobutton"
      onClick={() => console.log('clic')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };