import React from "react";
import '../styles/components/dist/_TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 
      className={`todocounter ${!!loading && "todocounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} toDos</h2>
  );
}

export { TodoCounter };