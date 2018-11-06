import React, { Component } from 'react'
import UserList from '../userviews/UsersList'
import ChatView from "../chatviews/ChatView";
import Navbar from "./Navbar";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if(this.props.auth.isEmpty)
      return <Redirect to='/signin'></Redirect>;

    return (
      <div>
        <Navbar></Navbar>
        <div className="container clearfix">
            <UserList {...this.props}></UserList>
            <ChatView {...this.props}></ChatView>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Home)