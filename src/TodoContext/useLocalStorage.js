import React from "react";
//......................
// ESTO ES UN REACT HOOK O BIEN, UN CUSTOM HOOK
const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  //...................................
  //ESTE ES UN MANEJO DE EFECTOS EN RECAT
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem);
        setLoading(false);
  
      } catch(error) {
        setError(error);
      }
    }, 1000);
  });
  //AQUÍ TERMINA UN MANEJO DE EFECTOS EN REACT
  //...................................
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);  
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
//AQUÍ TERMINA EL HOOK 
//....................

export { useLocalStorage };