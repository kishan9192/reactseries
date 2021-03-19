const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
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


// Reducer function (Common Reducer function for both the actions)
// Not a good practice since one reducer function will become too lengthy if we have a lot of actions
// therefore having separate states and reducers for different types of actions

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             noOfCakes: state.noOfCakes-1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             noOfIceCreams: state.noOfIceCreams-1
//         }
//         default: return state
//     }
// }

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

const store = createStore(rootReducer)

// gives the initial state of the application getState() function
console.log('Initial State', store.getState())


// Allow the app to subscribe the changes in the store. Adding a listener
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

// Store provides a dispatch method to update the state
// dispatch method takes the action to be passed, but we have the action creater function so we pass that
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// Unsubscribe from the store by calling the function returned by the subscribe method
unsubscribe()