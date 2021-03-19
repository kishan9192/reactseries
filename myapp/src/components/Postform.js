import axios from 'axios'
import React, { Component } from 'react'

 class Postform extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId: '',
              title: '',
              body: '',
         }
     }
     
     // By using the name attribute we don't need to have separate handlers for each input
     handleChange = (e) => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }

     handleSubmit = (e) => {
         console.log(this.state)
         e.preventDefault();
         axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
         .then(resp => console.log(resp))
         .catch(err => console.log(err))
     }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                    <input type = "text" name = "userId" value = {userId} onChange = {this.handleChange}/>
                    </div>
                    <div>
                    <input type = "text" name = "title" value = {title} onChange  = {this.handleChange}/>
                    </div>
                    <div>
                    <input type = "text" name = "body" value = {body} onChange = {this.handleChange}/>
                    </div> 
                    <button type = "submit">Submit</button>                
                </form>
                
            </div>
        )
    }
}

export default Postform
