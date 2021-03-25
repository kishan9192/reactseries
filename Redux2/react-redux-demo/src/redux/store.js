import {createStore} from 'redux';
import cakeReducer from './cakes/CakeReducer'
const store = createStore(cakeReducer)

export default store

// here we have created the redux store
// next step is to provide this store to our react application. This is where react-redux library comes into picture
// To provide the store to our react application the react redux library exports a component called provider. (App.js)