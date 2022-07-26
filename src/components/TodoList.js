import React from "react";
import '../styles/components/dist/_TodoList.css';

const TodoList = (props) => {
  return (
    <section className="todolist">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error.length) && props.searchedTodos.map(props.render)}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };