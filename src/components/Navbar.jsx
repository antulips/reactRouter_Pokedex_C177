import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* AREA DE TRABAJO */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
