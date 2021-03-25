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

const todos = (state = stateBefore, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

      // In toggle, since the reducer function is to be a pure function and state mutation is not allowed
      // we can't modify the object in the state array and return the new array. 
      // We instead iterate on each object of the state array, and return a new array without modifying the state
      // so check every todo item in the state array using state.map, and if the item id matches with action id, then
      // we copy the object first and then change the property we want to change with the action, and finally return a new modified array
      case 'TOGGLE':
        return state.map(item => {
            if (item.id !== action.id) {
                return item;
            }

            return {
                ...item,
                completed: !item.completed
            }
        });

    default:
      return state;
  }
};

const store = createStore(todos);
console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(addTodo());
store.dispatch(toggleTodo());
