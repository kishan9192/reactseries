import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message'
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ConditionalRenderUI from './components/ConditionalRenderUI';
import PersonList from './components/PersonList';
import Form from './components/Form';
import ListHTTP from './components/ListHTTP'
import Postform from './components/Postform';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterFour from './components/HooksCounterFour';
import UseEffectsOne from './components/UseEffectsOne';
function App() {
  return (
    <div className="App">
    <Greet name = "Kishan Mishra" heroName = "Superman">
      <p>This is the child component of greet 1</p>
      </Greet>

    {/* <Greet name = "Mishra" heroName = "Batman">
      <button>Action</button>
      </Greet>

    <Greet name = "Abhinav" heroName = "Spiderman" /> */}

    <Welcome name = "Bruce" age = {44} />

    <Message/>

    <Counter/>

    <ParentComponent/>

    <ConditionalRenderUI/>

    <PersonList/>

    <Form/>

    <ListHTTP/>

    <Postform/>

    <HooksCounter/>

    <HooksCounterTwo/>
    <HooksCounterThree/>
    <HooksCounterFour/>

    <UseEffectsOne/>
   </div>
  );
}

export default App;
