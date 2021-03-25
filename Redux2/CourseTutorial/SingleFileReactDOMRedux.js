const reducer = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT': return state+1
      case 'DECREMENT': return state-1
      default: return state
    }
  }
  

  // Counter Component. These are the props, passed from REACTDOM.render
  // so Buttonclick onInc on click dispatches an action of type Increment and the state is changed by the reducer
  // as soon as the state is changed, the subscribe method gets called, and when subscribe method is called,
  // it accepts a callback function which is our render function, so everytime the redux state changes, 
  // the component is rendered by the subscribe method. 
  // Button Click => Dispatch Action => Reducer changes state => subscribe method called on state change => calls the callback function render
  const Counter = ({value, onInc, onDec}) => (
    <div>
      <h1>{value}</h1>
      <button onClick = {onInc}>Inc+</button>
      <button onClick = {onDec}>Dec-</button>
    </div>
  )
  
  const {createStore} = Redux
  
  const store = createStore(reducer)
  

  // called the Counter component passing props
  // value holds the value of counter. Since the state currently holds only count. therefore value = store.getState()
  // onInc is also passed as a prop, which is a callback function which dispatches a action of type 'INCREMENT'
  // onInc is also passed as a prop, which is a callback function which dispatches a action of type 'DECREMENT'
  const render = () => {
    ReactDOM.render(
      <Counter value = {store.getState()}
                onInc = {()=> 
                store.dispatch({
                  type:'INCREMENT'
                })}
                
                onDec = {()=>
                store.dispatch({
                  type:'DECREMENT'
                })}
                
                />,
            document.getElementById('root')
    );
  };
  
  store.subscribe(render)
  // we need to call this render() function if we want to display it
  render()

  // link: https://embed.plnkr.co/github/eggheadio-projects/getting-started-with-redux/master/08-react-redux-react-counter-example?show=script,preview