import React, { Component } from 'react'

 class ConditionalRenderUI extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {
        return (
            // This approach renders the div element when the condition is true
            // and doesn't render anything if the condition is false
            this.state.isLoggedIn && <div>Welcome To React</div>   

            // Other approach. If else. Renders Welcome to react if true else You're not logged in
            //this.state.isLoggedIn ? <div> Welcome to React</div> : <div>You're not logged in</div>
        )
    }
}

export default ConditionalRenderUI
