import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;