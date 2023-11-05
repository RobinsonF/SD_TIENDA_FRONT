import React from 'react';

function useLocalStorage(itemName, initialValue){

    const [item, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItems;
          if(!localStorageItems){
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItems = [];
          }else{
            parsedItems = JSON.parse(localStorageItems);
            setItems(parsedItems);
          }
          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
      }, 100);
      
    }, []);

    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems(newItems);
    }


    return {
      item, 
      saveItems, 
      loading, 
      error
    };
  
  }

  function useLocalStorageOrder(itemName, initialValue){

    const [order, setOrder] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItems;
          if(!localStorageItems){
            localStorage.setOrder(itemName, JSON.stringify([]));
            parsedItems = [];
          }else{
            parsedItems = JSON.parse(localStorageItems);
            setOrder(parsedItems);
          }
          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
      }, 100);
      
    }, []);
    
    const saveOrders = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setOrder(newItems);
    }
  
    return {
      order,
      saveOrders,
      loading, 
      error
    };
  
  }

  export {useLocalStorage, useLocalStorageOrder}