const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const stateBefore = [
  {
    id: 1,
    text: "Go Shopping",
    completed: false,
  },
];

const addTodo = () => {
  return { type: "ADD_TODO", id: 0, text: "Learn Redux" };
};

const toggleTodo = () => {
  return {
    type: "TOGGLE",
    id: 1,
  };
};

const changeVisibility = () => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: "SHOW COMPLETED",
  };
};

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

const todos = (state = stateBefore, action) => {
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

// We can write both ways, here todos reducer is managing the todos state of the application's state
// visibilityFilter reducer is managing the visibilityFilter state of application
// So in ES6, if the key and value have the same name then we can omit the value, and just write keys. Like in line 75
// like this {todos, visibilityFilter}, omitting the values, since key and value have same name

// const todoApp = combineReducers({ 
//     todos: todos, 
//     visibilityFilter: visibilityFilter
//  });

const store = createStore(todoApp);
console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(addTodo());
store.dispatch(toggleTodo());
store.dispatch(changeVisibility());
