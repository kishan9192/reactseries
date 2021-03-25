const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')

initialstate = {
    loading: true,
    users:[],
    error:''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

// Pure action creators
function fetchUserRequest() {
    return {
        type:FETCH_USER_REQUEST
    }
}

function fetchUserSuccess(users) {
    return {
        type:FETCH_USER_SUCCESS,
        payload: users
    }
}

function fetchUserFailure(error) {
    return {
        type:FETCH_USER_FAILURE,
        payload: error
    }
}

// This is an action creator. ThunkMiddleware allows an action creator
// to return a function instead of object
// SO fetchUser can return a function, and what is special about this function
// is that it is not restricted to be a pure function. So it is allowed to have side-effects
// such as async API calls
// This function can also dispatch actions, because it recieves dispatch method as it's argument 
const fetchUsers = () => {
    return function(dispatch) {
        // before making an api call, we dispatch this action 
        // which sets loading to true 
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // here response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch (error => {
            // error.message gives the description of the error
            const message = error.message;
            dispatch(fetchUserFailure(message))
        })
    }
}

function reducer(state = initialstate, action) {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading:true
        }

        case FETCH_USER_SUCCESS: return {
            loading:false,
            users: action.payload,
            error:''
        }

        case FETCH_USER_FAILURE: return {
            ...state,
            loading:true,
            users:[],
            error: action.payload
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchUsers())