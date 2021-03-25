const redux = require("redux");
const createStore = redux.createStore;

const stateBefore = [
    {
        id: 1,
        text : 'Go Shopping',
        completed: false
    }
];

const addTodo = () => {
  return { type: "ADD_TODO", id: 0, text: "Learn Redux" };
};

const toggleTodo = () => {
    return {
        type: 'TOGGLE',
        id: 1
    }
}

const changeVisibility = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW COMPLETED'
    }
}

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id : action.id,
                text: action.text,
                completed: false,
            };
        case 'TOGGLE': 
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default : return state
    }
}

const todos = (state = stateBefore, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action),
      ];

        case 'TOGGLE':
        return state.map(t => todo(t, action));

    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default : return state
    }
}

// Composition reducer pattern
// a new reducer that calls the existing reducers to manage parts of its state and combines 
// the results in a single state object Now that the first time it runs, it will pass undefined as the 
// state of the child reducers because the initial state of the combined reducer is an empty object, 
// so all its fields are undefined. This gets the child reducers to return their initial states and 
// populates the state object for the first time.
const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
}

const store = createStore(todoApp);
console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(addTodo());
store.dispatch(toggleTodo());
store.dispatch(changeVisibility());
