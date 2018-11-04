import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from '../../store/actions/authActions';

const Navbar = (props) =>{
    console.log('props',props)
    const { auth } = props;
    return  (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Firebase Chat</Link>
                <ul className="right">
                    <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>
                    <li>
                        {!auth.isEmpty?
                        <NavLink to="/" className="btn btn-floating pink lighten-1">{auth.displayName[0]}</NavLink>
                        :''
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: (creds)=>dispatch(signOut(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);