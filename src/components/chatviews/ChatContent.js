import React, { Component } from 'react'
import OtherMessage from './OtherMessage'
import OwnerMessage from './OwnerMessage'
import InputMessage from './InputMessage'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import _ from "lodash";

class ChatContent extends Component {
    getConversation=(conversationId)=>{
        let index = _.findIndex(this.props.conversations, (conversation)=>(conversation.id === conversationId));

        return this.props.conversations[index];
    }

    componentDidUpdate(){
        this.domChatHistory.scrollTop = this.domChatHistory.scrollHeight;
    }

    isUrl = (str)=>{
        let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
        return regexp.test(str);
    }

    render() {
        let conversationId = this.props.match.params.id;
        let otherId = this.props.match.params.uid;
        let conversation = this.getConversation(conversationId);
        let chatContents = (conversation&&conversation.chatContents)?conversation.chatContents:[];
        //console.log('chatContent', this.props)
        return (
            <div>
                <div className="chat-history" ref={e=>this.domChatHistory=e}>
                    <ul>
                        {chatContents.map((chatContent, index)=>{
                            //console.log('chatContent',chatContent)
                            if(chatContent.userId === this.props.auth.uid){
                                return <OwnerMessage chatContent={chatContent} key={index} isUrl={this.isUrl}/>
                            } 
                            else{
                                return <OtherMessage chatContent={chatContent} key={index} isUrl={this.isUrl}/>
                            }  
                        })}
                    </ul>
                </div>
                <InputMessage uid={this.props.auth.uid} otherId={otherId} conversation={conversation} match={this.props.match}></InputMessage>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    //console.log('chatContent',state)
    return{
        //chatContents: state.chat.chatContents//
        conversations: state.firestore.ordered.conversations||[]
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'conversations'},
    ])
)(ChatContent);