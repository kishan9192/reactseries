import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {

    constructor() {
        super();
        this.state = {
            parentName : 'Kishan',
        }
        this.greet = this.greet.bind(this);
    }

    greet(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greet}/>    
            </div>
        )
    }
}

export default ParentComponent
