import React, { Component } from 'react'
import UserList from '../userviews/UsersList'
import ChatView from "../chatviews/ChatView";
import firebase from '../../config/fbConfig';
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    let user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="container clearfix">
            <UserList></UserList>
            <ChatView></ChatView>
        </div>
      </div>
    )
  }
}
