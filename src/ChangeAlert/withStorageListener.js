import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('There were changes in TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.synchronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent 
        show={storageChange} 
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };