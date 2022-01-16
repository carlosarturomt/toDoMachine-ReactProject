import React from "react";
import '../styles/components/dist/_TodoList.css';

const TodoList = (props) => {
  return (
    <section className="todolist">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };