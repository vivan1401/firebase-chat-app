import React, { Component } from 'react'
import OtherMessage from './OtherMessage'
import OwnerMessage from './OwnerMessage'

export default class ChatContent extends Component {
  render() {
    return (
        <div className="chat-history">
            <ul>
                <OwnerMessage></OwnerMessage>
                <OtherMessage></OtherMessage>
                <OtherMessage></OtherMessage>
                <OwnerMessage></OwnerMessage>
                <OwnerMessage></OwnerMessage>
                <OtherMessage></OtherMessage>
            </ul>
        </div>
    )
  }
}
