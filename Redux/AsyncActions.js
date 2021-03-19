// Synchronus actions
// As soon as the action is dispatched the state is immediately updated

const redux = require('redux')

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading:false,
    users:[],
    error:''
}

// 1
fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}


 fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}


fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

// This is going to be our action creator
// What the thunk middleware brings to the table is the ability to return the function
// inside the action creator instead of returning the action object, and the returned function can have 
// HTTP calls etc. It can have side-effects and it doesn't have to be pure.

// This returned function can also dispatch actions as well, because it receives the dispatch method as it's argument
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //here response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch (error => {
            //error.message gives the description of the error
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading:true,
        }
        case FETCH_USER_SUCCESS: return {
            loading:false,
            users: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }
        
    }
}



const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())