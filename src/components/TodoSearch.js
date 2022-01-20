import React from "react";
import '../styles/components/dist/_TodoSearch.css';
import { TodoContext } from "../TodoContext";


const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <aside className="todosearch">
      <input 
        placeholder="Buscar..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <span className="isearch"></span>
    </aside>
  );
}

export { TodoSearch };