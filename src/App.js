import React, { Component } from "react";
import Forms from "./components/Forms";
import View from "./components/View";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Forms change={this.inputHandler} />
        <View
          first={this.state.firstname}
          last={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
