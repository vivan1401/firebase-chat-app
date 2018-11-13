import React, { Component } from 'react'
import { sendMessage, inputMessage } from "../../store/actions/chatActions";
import { connect } from "react-redux";

class InputMessage  extends Component {
    //state = {
    //    content: "",
    //}

    handleChange = (e)=>{
        //this.setState({
        //    [e.target.id]: e.target.value,
        //})(
        this.props.inputMessage(e.target.value);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        e.target.reset();
        if(this.props.match.path === '/chat/:uid/:id')
            if(this.props.inputMess !== ''){
                this.props.sendMessage(
                    {
                        conversation: this.props.conversation,
                        uid: this.props.uid,
                        otherId: this.props.otherId,
                        content: this.props.inputMess//this.state.content
                    });
                //this.setState({
                //    content: '',
                //})
            }
    }

    handleFileChange =e=>{
        e.preventDefault()
        console.log('file', e.target.files[0])
    }

    render(){
        //console.log('input', this.props)
        return (
            <div className="chat-message clearfix">
                <form onSubmit={this.handleSubmit}>
                <input id="content" placeholder ="Type your message" rows="3" autoComplete="off" onChange={this.handleChange}></input>
                <div>      
                    <i className="fa fa-file"></i>
                    <label className="custom-file-upload">
                        <input type="file" accept="image/*" onChange={this.handleFileChange} hidden/>
                        <i className="fa fa-file-image"></i>
                    </label>
                
                    <button>Send</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    //console.log('input mess', state)
    return {
        inputMess: state.chat.inputMess
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message) => dispatch(sendMessage(message)),
        inputMessage: (message) => dispatch(inputMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);