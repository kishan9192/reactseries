import React from 'react';

class Message extends React.Component {

    // State is an object that is privately maintained inside the component
    // We can't modify the props inside any other component, but we can definitely modify the state using 
    // setState method.
    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }

        // FOR THE THIRD WAY OF BINDING
        // This is considered as the best way to do it inside the constructor considering the large applications
        // this.changeMessage = this.changeMessage.bind(this);
    }
    
    // changeMessage() {
    //     this.setState({
    //         message: "Thank you for subscribing"
    //     })
    // }

    // UNCOMMENT THIS FOR THE FOURTH WAY OF BINDING
    changeMessageArrow = () => {
        this.setState({
            message: "GoodBye!"
        })
    }

    render() {
        // We are getting the error "Cannot set the state of undefined", because in the clickhandler
        // tje "this" keyword is undefined. We either need to bind it, or call the arrow function in 
        // onClick, or change the function definition from normal function to an arrow function. 
        return (
            <div>
                <h1>{this.state.message}</h1>

                {/*  One way of calling the method binding to a click event */}
                {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button> */}
                
                {/* This is the simply calling the function in the JSX expression */}
                {/* <button onClick={() => this.changeMessage()}>Subscribe</button> */}

                {/* This is using the binding in the constructor of the class.  */}
                {/* <button onClick={this.changeMessage}>Subscribe</button> */}

                {/* When we changed the function definition to the arrow notation */}
                <button onClick={this.changeMessageArrow}>Subscribe</button>

            </div>
        )
    }
}
export default Message