import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
//import store from "./redux/store";
import todoStore from './redux/todolist/todoStore'
import { Provider } from "react-redux";
import ToDoContainer from './components/todoContainer'
import {redux} from 'redux'
import ParentComp from './components/demo/ParentComp';

// For the Provider to know about our store we need to import it first and then pass it in props
// We typically provide the store at the top of our App component, so that it is accessible to all the 
// components in our application
function App() {
  return (
    // <Provider store={todoStore}>
    //   <div className="App">
    //     {/* <CakeContainer /> */}
    //     <ToDoContainer/>
    //   </div>
    // </Provider>
    <div>
      <ParentComp/>
    </div>
  );
}

export default App;
