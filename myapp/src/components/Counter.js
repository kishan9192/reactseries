import React, { Component } from 'react'

 class Counter extends Component {
     constructor() {
         super() 
         this.state = {
             count: 0
         }
     }
     incrementCount() {
        //  this.setState({
        //      count: this.state.count + 1
        //  }, () => console.log(this.state.count))

        this.setState((previousState) => ({
            count: previousState.count+1
        }))
     }

     // When we want to do increment 5 times, and to do that we call incrementCount method 5 times
     // inside this method. Normally to optimize the performance React will take all those setState calls
     // as a single setState call, and will render count as 1. Therefore to avoid that we need to increment
     // the count based on the previous value of count everytime. Therefore we use the function inside the 
     // setState method that takes prevState as the parameter and will do the increment 5 times based on the 
     // prevState
     incrementFive() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
     }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter