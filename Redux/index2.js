const redux = require('redux')

// HAVING SEPARATE STORES / ACTIONS / REDUCERS FOR ICECREAM and CAKE
const createStore = redux.createStore
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

// ALL THE RESPONSIBILITIES OF REDUX STORE

// For holding the initial state of the application. 
// The reducer function has the initial state of the application
// This is required to make the state transitions based on the actions received
const Cakestore = createStore(Cakereducer)
const IceCreamstore = createStore(IceCreamreducer)

// gives the initial state of the Cake and IceCream  application getState() function
console.log('Initial Cake State', Cakestore.getState())
console.log('Initial IceCream State', IceCreamstore.getState())


// Allow the app to subscribe the changes in the store. Adding a listener
const Cakeunsubscribe = Cakestore.subscribe(() => console.log('Updated Cake State', Cakestore.getState()))
const IceCreamunsubscribe = IceCreamstore.subscribe(() => console.log('Updated IceCream State', IceCreamstore.getState()))

// Store provides a dispatch method to update the state
// dispatch method takes the action to be passed, but we have the action creater function so we pass that
Cakestore.dispatch(buyCake())
Cakestore.dispatch(buyCake())
Cakestore.dispatch(buyCake())
IceCreamstore.dispatch(buyIceCream())
IceCreamstore.dispatch(buyIceCream())

// Unsubscribe from the store by calling the function returned by the subscribe method
Cakeunsubscribe()
IceCreamunsubscribe()