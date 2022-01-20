import React from "react";
import '../styles/components/dist/_TodoList.css';

const TodoItem = (props) => {
  return (
    <li className="todolist__card">
      <span 
        className={`todolist__card--ickeck ${props.completed && 'todolist__card--iactive'}`}
        onClick={props.onComplete}
      ></span>
      <p className={`${props.completed && 'todolist__card--tactive'}`}>{props.text}</p>
      <span 
        className="basura"
        onClick={props.onDelete}
      ></span>
    </li>
  );
}

export { TodoItem };