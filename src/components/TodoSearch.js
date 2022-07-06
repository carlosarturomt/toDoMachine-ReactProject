import React from "react";
import '../styles/components/dist/_TodoSearch.css';


const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <aside className="todosearch">
      <input 
        className="loading"
        placeholder="Buscar..."
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
      {/* <span className="isearch"/> */}
    </aside>
  );
}

export { TodoSearch };