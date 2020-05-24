import React, { Component } from "react";
import "./navbar.css";
import { ContextComponent } from "./contextComponent";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar-container">
        <div></div>
        <div className="total-num-students">
          Num. of Students: {this.context[0].length}
        </div>
      </div>
    );
  }
}
Navbar.contextType = ContextComponent;
export default Navbar;
