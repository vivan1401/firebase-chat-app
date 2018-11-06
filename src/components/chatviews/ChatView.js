import React, { Component } from 'react'
import ChatContent from './ChatContent'
import ChatWith from './ChatWith'
import "../Style.css"

export default class ChatView extends Component {
  render() {
    //console.log('chatView',this.props);
    return (
        <div className="chat">
            <ChatWith uid={this.props.match.params.uid}></ChatWith>
            <ChatContent {...this.props}></ChatContent>
        </div>
    )
  }
}