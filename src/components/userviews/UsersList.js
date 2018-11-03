import React, { Component } from 'react'
import Search from './Search'
import User from './User'
import '../Style.css'

export default class UsersList extends Component {
  render() {
    return (
      <div className="people-list" id="people-list">
        <Search></Search>
        <ul className="list">
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
            <User></User>
        </ul>
      </div>
    )
  }
}
