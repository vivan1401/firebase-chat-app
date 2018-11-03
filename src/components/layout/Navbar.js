import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import firebase from '../../config/fbConfig';

const Navbar = () =>{
    return  (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Firebase Chat</Link>
                <ul className="right">
                    <li><NavLink to="/" onClick={()=> firebase.auth().signOut()}>Log Out</NavLink></li>
                    <li><NavLink to="/" className="btn btn-floating pink lighten-1">VV</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;