import React from "react";
import '../styles/components/dist/_TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className="todocounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };