let nextId = 2;

const addTodo = (item, itemId) => {
    return { type: "ADD_TODO", id: itemId, text: item };
  };
  
  const toggleTodo = (todoId) => {
    return {
      type: "TOGGLE",
      id : todoId
    };
  };

  const changeVisibility = (itemFilter) => {
    return {
      type: "SET_VISIBILITY_FILTER",
      filter: itemFilter
    };
  };
  

export {addTodo, toggleTodo, changeVisibility}