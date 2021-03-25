import {combineReducers} from 'redux'
//const combineReducers = redux.combineReducers

// const stateBefore = [
//     {
//       id: 1,
//       text: "Go Shopping",
//       completed: false,
//     },
//   ];


  const todo = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          id: action.id,
          text: action.text,
          completed: false,
        };
      case "TOGGLE":
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed,
        };
      default:
        return state;
    }
  };
  
  const todos = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, todo(undefined, action)];
  
      case "TOGGLE":
        return state.map((t) => todo(t, action));
  
      default:
        return state;
    }
  };
  
  const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
      case "SET_VISIBILITY_FILTER":
        return action.filter;
      default:
        return state;
    }
  };
  
  // This is a combined reducer that combines different reducers that are managing different states
  const todoApp = combineReducers({ todos, visibilityFilter });
  export default todoApp  