import React, { Component } from 'react'
import { sendMessage } from "../../store/actions/chatActions";
import { connect } from "react-redux";

class InputMessage  extends Component {
    state = {
        content: "",
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        e.target.reset();
        if(this.state.content !== ''){
            this.props.sendMessage(
                {
                    conversation: this.props.conversation,
                    uid: this.props.uid,
                    otherId: this.props.otherId,
                    content: this.state.content
                });
            this.setState({
                content: '',
            })
        }
    }

    render(){
        //console.log('input', this.props)
        return (
            <div className="chat-message clearfix">
                <form onSubmit={this.handleSubmit}>
                <input id="content" placeholder ="Type your message" rows="3" autoComplete="off" onChange={this.handleChange}></input>
                <div>      
                    <i className="fa fa-file"></i>
                    <i className="fa fa-file-image"></i>
                
                    <button>Send</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(InputMessage);