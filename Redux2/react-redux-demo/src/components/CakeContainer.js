import React from 'react'
import { buyCake } from '../redux/cakes/CakeActions'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h2> Number of Cakes {props.numberOfCakes} </h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>
    )
}

// mapStateToProps function has access to redux store, and gets redux state from the store
// redux store stores the state of the entire application
// so mapStateToProps takes state as parameter and returns an object. Now in that object
// we have defined a property called "numberOfCakes", which is mapped to state's noOfCakes (see in CakeReducer : initialState)
// so this property i.e. numberOfCakes is now available as a prop in our CakeContainer component
// and we can use it in JSX for displaying. 

// Similarly mapDispatchToProp has a buyCake property which is available as a prop now, to CakeContainer,
// and buyCake is mapped to a callback function which dispatches action buyCake(). Don't forget to import buyCake Action
const mapStateToProps = state => {
    return {
        numberOfCakes: state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()) 
    }
}

// 'react-redux' provides a connect method which connects the above two methods to our 
// CakeContainer component. 

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
