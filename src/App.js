import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true  },
  { text: 'Tomar el Curso de Introducción  a React', completed: true  },
  { text: 'Leer Joyland', completed: false  },
  { text: 'Ser React Developer', completed: false  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <div className="flex">
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </div>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;