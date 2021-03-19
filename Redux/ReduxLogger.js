const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// this applyMiddleware is used for applying middleware such as logger to our react application
const applyMiddleware = redux.applyMiddleware
// logger is the middleware that we are using 
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action creater. This is a function that returns the action
function buyCake() {

    // This is the action. with type = BUY_CAKE
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
    
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: '1 reducer two actions'
    }
}



const initialCakeState = {
    noOfCakes:10,
}

const initialIceCreamState = {
    noOfIceCreams:20
}


const Cakereducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes-1
        }
        default: return state
    }
}

const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {

        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams-1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    // Here we can give key as anything we want, but the value is the actual reducer function of cake and icecream
    // which is defined above
    cake: Cakereducer,
    iceCream: IceCreamreducer
})

// Here while creating a store we are applying middleware. Logger is our middleware.
// Rn we just have one middleware, but we can pass in as many middlewares as we want.
const store = createStore(rootReducer, applyMiddleware(logger))

// gives the initial state of the application getState() function
console.log('Initial State', store.getState())


// We have removed the console.log from subscribe here and getState, because now we have logger
// as our middleware to take care of that

const unsubscribe = store.subscribe(() => {})

// Store provides a dispatch method to update the state
// dispatch method takes the action to be passed, but we have the action creater function so we pass that
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// Unsubscribe from the store by calling the function returned by the subscribe method
unsubscribe()