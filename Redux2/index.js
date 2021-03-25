// In react we do import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';



//action creator 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

const initialState = {
    noOfCakes:10,
    noOfIceCreams:20
}

// Normally our state will have more than one property, therefore
// we just need to change the specific properties of the state against
// a specific action type. Therefore it is recommended to copy the 
// previous state by using a spread operator ...state, and then change the 
// property you need to change. Reducer returns the new state (after actions are executed)
function reducer(state = initialState, action) {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes-1
        }
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams-1
        }

        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial State :', store.getState())
const unsubscribe = store.subscribe(()=>console.log('Current state : ', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()