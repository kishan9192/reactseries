import {createStore} from 'redux';
import todoReducer from './todoApp'
const todoStore = createStore(todoReducer)

export default todoStore

// here we have created the redux store
// next step is to provide this store to our react application. This is where react-redux library comes into picture
// To provide the store to our react application the react redux library exports a component called provider. (App.js)