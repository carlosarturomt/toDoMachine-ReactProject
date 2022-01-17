import React from "react";
import '../styles/components/dist/_TodoSearch.css';


const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className="todosearch" 
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };