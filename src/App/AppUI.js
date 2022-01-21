import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <div className="flex">
        <TodoSearch />

        <TodoList>
          {/*ESTO ES IGUAL A; SI 'error' ES 'true', ENTONCES SALDRÁ UN <p> */}
          {error && <p className="loading">Ups! Ésta página ha petado 🔥</p>}

          {/*ESTO ES IGUAL A; SI 'lo  background-color: $color__primary; loading' ES 'true', ENTONCES SALDRÁ UN <p> */}
          {loading && <span className="loading--skeleton">
            <span className="loading--skeleton-int"></span>
          </span>}

          {/*ESTO ES IGUAL A; SI NO ESTAMOS CARGANDO'loading' Y 'searchedTodos' NO TIENE NADA DE INFORMACIÓN; ES UN array VACÍO,SI AMBAS DE CUMPLEN (todo en un paréntesis) ENTONCES (&&)*/}
          {!loading && !searchedTodos.length && <p className="loading">📌 Crea tu primer toDo 📌</p>}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() =>
                completeTodo(todo.text) +
                console.log(
                  "🥵 Ya COMPLETASTE un toDo, específicamente el de; " +
                    todo.text +
                    " 👌"
                )
              }
              onDelete={() =>
                deleteTodo(todo.text) +
                console.log(
                  "🔥 Ya BORRASTE un toDo, específicamente el de; " +
                    todo.text +
                    " 😱"
                )
              }
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export { AppUI };