import React, { Component } from 'react';


class NavBar extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg "  style={{"backgroundColor":"#037ef3"}}>
  <a className="navbar-brand" href="/"> <img alt="Aiesec Logo" className="logo-img" src="https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg" style={{width: "220px",
    "lineHeight": "100px"}} /></a>

  <div className="collapse navbar-collapse navbar-dark" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/additem">Add Item</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/items">Items</a>
      </li>
    </ul>
  </div>
</nav>
      );
    }
  }
  export default NavBar;