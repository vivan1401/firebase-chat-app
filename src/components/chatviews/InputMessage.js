import React from 'react'

class InputMessage{
    render(){
        return (
            <div className="chat-message clearfix">
                <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                <div>      
                <i className="fa fa-file-o"></i>
                <i className="fa fa-file-image-o"></i>
                
                <button>Send</button>
                </div>
            