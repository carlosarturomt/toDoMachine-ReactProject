import React from "react";

const TodoHeader = ({ children, loading }) => {
  return (
    <header className="w100">
      {
        React.Children
          .toArray(children)
          .map((child) => React.cloneElement(child, { loading }))
      }
    </header>
  );
};

export { TodoHeader };
