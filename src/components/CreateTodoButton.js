import React from "react";
import '../styles/components/dist/_TodoButton.css';

const CreateTodoButton = (props) => {
  const onClicButton = () => {
    props.setOpenModal(prevState => !prevState);
    console.log('clic');
  };

  return (
    <button 
      className="todobutton"
      onClick={onClicButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };