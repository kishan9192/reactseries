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

// todos is the main reducer that is used for createStore
// it is internally calling another reducer for every action. 
// So for todos the state is the list of items,
// while for todo, the state is an individual item

// ADD_TODO calls todo, with the initial state undefined, todo reducer returns a new state object which is the item
// that item is enclosed in the array, in todos because, todo reducer was called inside the array, after the previous state was copied
// return [ ...state, todo(undefined, action)] 
const todos = (state = stateBefore, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action),
      ];

      // TOGGLE action is returning a new array of items with completed toggled for id = 1
      // it iterates over the state array using state.map, and for every item in the state array
      // it calls the reducer todo, for which the state is the current item, whose completed is to be toggled
      // todo reducer's TOGGLE just returns an object after toggling the property. and lastly todos reducer returns the array after toggling the required items
      case 'TOGGLE':
        return state.map(t => todo(t, action));

    default:
      return state;
  }
};

const store = createStore(todos);
console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(addTodo());
store.dispatch(toggleTodo());
