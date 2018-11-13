import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import _ from "lodash";
import moment from 'moment'
import {star} from '../../store/actions/userActions'

const ChatWith = (props) =>{
    let index = _.findIndex(props.users,(o)=>(o.id===props.uid))
    let stars = props.profile.stars||[];
    let starIndex = _.findIndex(stars,(o)=>(o === props.uid));
    //console.log('with',starIndex)
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
                <i className="fa fa-star" style={starIndex>-1?{color:'yellow'}:{}} onClick={()=>{        
                    if(starIndex > -1)
                        stars.splice(starIndex,1)
                    else
                        stars.push(props.uid)
                    props.star({ownerId: props.auth.uid,stars});
                }}></i>
            </div>
        )
    else
        return <div className="chat-header clearfix" style={{height:'13vh'}}/>;
}


const mapStateToProps = (state)=>{
    //console.log('chat with',state )
    return{
        auth: state.firebase.auth,
        users: state.firestore.ordered.users||[],
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        star: (starInfo)=> (dispatch(star(starInfo))),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])  
)(ChatWith);