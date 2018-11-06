import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import _ from "lodash";
import moment from 'moment'

const ChatWith = (props) =>{
    let index = _.findIndex(props.users,(o)=>(o.id===props.uid))
    //console.log('with',props)
    if(index !== -1)
        return (
            <div className="chat-header clearfix">
                <img src={props.users[index].photoURL} alt="avatar" />
                
                <div className="chat-about">
                    <div className="chat-with">Chat with {props.users[index].displayName}</div>
                    <div className="chat-num-messages">
                        {props.users[index].isOnline? 'online':
                            moment(props.users[index].time.toDate()).calendar()}
                    </div>
                </div>
                <i className="fa fa-star"></i>
            </div>
        )
    else
        return <div className="chat-header clearfix" style={{height:'13vh'}}/>;
}


const mapStateToProps = (state)=>{
    //console.log('userl',state )
    return{
        users: state.firestore.ordered.users||[]
    }
}
  

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])  
)(ChatWith);