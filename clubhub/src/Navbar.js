import React from 'react';
import {  Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/club-list">Club List</Link>
          </li>
        </div>
      </>
    );
  }
}

export default Navbar;