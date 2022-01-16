import React from "react";
import '../styles/components/dist/_TodoList.css';

const TodoItem = (props) => {
  return (
    <li className="todolist__card">
      {/* <input type="checkbox"></input> */}
      <span className={`todolist__card--ickeck ${props.completed && 'todolist__card--iactive'}`}></span>
      <p className={`${props.completed && 'todolist__card--tactive'}`}>{props.text}</p>
      <span className="basura"></span>
    </li>
  );
}

export { TodoItem };