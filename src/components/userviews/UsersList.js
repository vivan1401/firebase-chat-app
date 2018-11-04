import React, { Component } from 'react'
import Search from './Search'
import User from './User'
import '../Style.css'
import { connect } from 'react-redux';

class UsersList extends Component {
  render() {
    let users = this.props.users;
    return (
      <div className="people-list" id="people-list">
        <Search></Search>
        <ul className="list">
          {
            users.map((user,index)=>{
              return(
                <User user={user} key={index}></User>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
      users: state.user.users,
  }
}

export default connect(mapStateToProps)(UsersList);