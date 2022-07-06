import React from "react";

const TodoForm = ({addTodo, setOpenModal}) => {
  const[newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>📌</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe algo que tengas pendiente."
      />
      <aside>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="active"
        >
          Añadir
        </button>
      </aside>
    </form>
  );
}

export { TodoForm };