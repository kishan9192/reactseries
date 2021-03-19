import React from 'react'

const Greet = props => {

    // We had many properties in the props, but we have just used name.
    // It's on us how many properties of the props we want to use. 
    // DESTRUCTURING THE PROPS
    const {name} = props
    return (

        <div>
            <h1>Hello {name}</h1>
            {props.children}
        </div>
    );
}

export default Greet