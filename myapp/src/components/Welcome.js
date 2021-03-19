import React from 'react'

class Welcome extends React.Component{
    render() {
        // DESTRUCTURING THE PROPS
        const {name, age} = this.props

        // Similarly we can destructure the state as well
        // const {state1 , state2 } = this.state
        return(
            <h1> Welcome {name} of age {age}: inside class component</h1>
        )
    }
}

export default Welcome