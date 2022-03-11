import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    const Nav1 = () => {
        return <div><NavLink to="/1">1
        </NavLink></div>
    }
    const Nav2 = () => {return <div><NavLink to="2">2</NavLink></div>}
    return <nav className='nav'>
        <Nav1/><Nav2/>
    </nav>
}

export default Nav;