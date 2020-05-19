import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
    };
  }

  handleChange(e) {
    console.log(e.target.value);

    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>This is an example of forms in React</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Forms;
