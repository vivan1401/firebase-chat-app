import React, { Component } from 'react';
import firebase from '../../config/fbConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class SignedInPage extends Component {
      state = {
        isSignedIn: false,
      }
    
      uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccess: ()=> false
        }
      }
    
      componentDidMount = ()=>{
        firebase.auth().onAuthStateChanged(user => {
          this.setState({
            isSignedIn: !!user,
          })
        })
    
      }
    
      render() {
        return (
            <div>
              {this.state.isSignedIn ?
                (
                  <div className="center">
                    <div style={ {fontSize: 50, margin: 20} }>You are signed In!</div>
                    <button className="btn"
                      onClick={()=> firebase.auth().signOut()}>Sign out!</button>
                  </div>
                )
                :
                (<StyledFirebaseAuth
                  uiConfig = {this.uiConfig}
                  firebaseAuth = {firebase.auth()}/> )
              }
            </div>
        );
      }
}
