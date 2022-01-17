import React from "react";
import '../styles/components/dist/_TodoList.css';

const TodoItem = (props) => {
  const onComplete = () => {
    alert('Reacturo estuvo aquí, por cierto, ya completaste el ToDo ' + props.text)
  }

  const onDelete = () => {
    alert('Reacturo estuvo aquí, por cierto, ya borraste el ToDo ' + props.text)
  }

  return (
    <li className="todolist__card">
      {/* <input type="checkbox"></input> */}
      <span 
        className={`todolist__card--ickeck ${props.completed && 'todolist__card--iactive'}`}
        onClick={onComplete}
      ></span>
      <p className={`${props.completed && 'todolist__card--tactive'}`}>{props.text}</p>
      <span 
        className="basura"
        onClick={onDelete}
      ></span>
    </li>
  );
}

export { TodoItem };