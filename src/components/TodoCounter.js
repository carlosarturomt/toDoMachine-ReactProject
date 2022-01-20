import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/components/dist/_TodoCounter.css';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="todocounter">Has completado {completedTodos} de {totalTodos} toDos</h2>
  );
}

export { TodoCounter };