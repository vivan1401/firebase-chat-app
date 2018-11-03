import React, { Component } from 'react'
import ChatContent from './ChatContent'
import ChatWith from './ChatWith'
import InputMessage from './InputMessage'
import "../Style.css"

export default class ChatView extends Component {
  render() {
    return (
        <div className="chat">
            <ChatWith></ChatWith>
            <ChatContent></ChatContent>
            <InputMessage></InputMessage>
        </div>
    )
  }
}