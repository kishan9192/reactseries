import React, { Component } from 'react'
import ParentComp from './ParentComp';

class ChildComp extends Component {
    constructor(props) {
        super(props)
    }

    // setData = () => {
    //     this.props.data("Hello from child");
    // }


    render() {
        return (
            <div>
                {/* <button onClick = {this.setData}>Click</button> */}
                <button onClick = {() => this.props.data("Direct passing")}>Click</button>
            </div>
        )
    }
}

export default ChildComp
