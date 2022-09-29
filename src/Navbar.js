import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div >
            <ul className="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/inventory'>Inventory</NavLink></li>
        <li><NavLink to='/form'>Add Parts</NavLink></li>
      </ul>
        </div>
    )
}

export default Navbar;