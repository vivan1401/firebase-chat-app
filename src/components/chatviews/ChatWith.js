import React from 'react'

const ChatWith = () =>{
    return (
        <div className="chat-header clearfix">
            <img src="https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg" alt="avatar" />
            
            <div className="chat-about">
                <div className="chat-with">Chat with Vincent Porter</div>
                <div className="chat-num-messages">already 1 902 messages</div>
            </div>
            <i className="fa fa-star"></i>
        </div>
    )
}

export default ChatWith;