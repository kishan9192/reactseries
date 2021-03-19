import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.username}`);
    // preventDefault is used so that the form doesn't reload on submit
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          Username 
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
