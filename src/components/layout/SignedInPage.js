import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignedInPage extends Component {  
  render() {
    //console.log('signin',this.props.auth)
    if(!this.props.auth.isEmpty)
      return <Redirect to='/'></Redirect>
      
    return (
      <div>
        <div className="center">
            <div style={ {fontSize: 50, margin: 40} }>You are not signed in yet!</div>
            <button className="btn" style={{background: 'white'}}
              onClick={this.props.signIn}>
              <img alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                style={{maxHeight: '60%', verticalAlign: 'middle'}}/>
              <span style={{padding: 30, color:'grey', fontWeight:'bold',verticalAlign: 'middle'}}>Sign in with Google</span>
            </button>
            <div style={ {fontSize: 20, margin: 10, color: 'orange'} }>{this.props.authError? 
              'Login Fail!': null}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signIn: (creds)=>dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInPage)