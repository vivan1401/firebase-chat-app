import React, { Component } from 'react'
import OtherMessage from './OtherMessage'
import OwnerMessage from './OwnerMessage'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ChatContent extends Component {
  render() {
    let chatContents = this.props.chatContents;
    return (
        <div className="chat-history">
            <ul>
                {chatContents.map((chatContent, index)=>{
                    if(chatContent.isOwner){
                        return <OwnerMessage content={chatContent.content} key={index}/>
                    } 
                    else{
                        return <OtherMessage content={chatContent.content} key={index}/>
                    }  
                })}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
    //console.log(state)
    return{
        chatContents: state.chat.chatContents//state.firestore.ordered.chatContents?state.firestore.ordered.chatContents:[],
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'chatContents'},
    ])
)(ChatContent);