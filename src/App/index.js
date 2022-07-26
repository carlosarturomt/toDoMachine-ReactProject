import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../todosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptyTodos/EmptySearchResults';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlert } from "../ChangeAlert/";

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo, 
    synchronizeTodos,
  } = useTodos();
  return (
    <React.Fragment>
      <div className="flex">
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          // eslint-disable-next-line no-undef
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => <EmptySearchResults />}
          render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() =>
                completeTodo(todo.text)
              }
              onDelete={() =>
                deleteTodo(todo.text)
              }
            />
          )}
        />

        {!!openModal && (
          <Modal>
            <TodoForm 
              addTodo = {addTodo}
              setOpenModal = {setOpenModal}
            />
          </Modal>
        )}
      </div>
      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert 
        synchronize={synchronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;