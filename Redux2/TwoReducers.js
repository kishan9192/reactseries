// In react we do import redux from 'redux'
const redux = require('redux')
const logger = require('redux-logger')
const reduxLogger = logger.createLogger()
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const combineReducers = redux.combineReducers
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

const initialCakeState = {
    noOfCakes:10,
}

const initialIceCreamState = {
    noOfCakes:10,
}

// Normally our state will have more than one property, therefore
// we just need to change the specific properties of the state against
// a specific action type. Therefore it is recommended to copy the 
// previous state by using a spread operator ...state, and then change the 
// property you need to change. Reducer returns the new state (after actions are executed)
function CakeReducer(state = initialCakeState, action) {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes-1
        }
        default: return state
    }
}

function IceCreamReducer(state = initialIceCreamState, action) {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams-1
        }

        default: return state
    }
}

// What it does is, it changes the overall global state. Now the number of cakes can be
// accessed as state.cake.noOfCakes. Run the code and see. node TwoReducers
const reducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

const store = createStore(reducer, applyMiddleware(reduxLogger));
console.log('Initial State :', store.getState())
const unsubscribe = store.subscribe(()=>{});
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()