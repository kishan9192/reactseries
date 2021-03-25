import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: ''         
        }
    }

    // changeMessage = (childData) => {
    //     this.setState({message:childData});
    // }
    
    render() {

        return (
            <div>
                {/* <ChildComp data = {this.changeMessage} /> */}
                <ChildComp data = {(childData) => this.setState({message:childData})} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ParentComp
