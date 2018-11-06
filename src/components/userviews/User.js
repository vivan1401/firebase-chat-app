import React from 'react'
import moment from 'moment'


const User = (props) =>{
    //console.log('user',props.user)
    let status = props.user.isOnline ? "online":moment(props.user.time.toDate()).calendar()
    return (
        <li className="clearfix" onClick={()=>{
            props.userClick(props.user.id,props.user.conversations);
            //props.history.push('/chat/'+props.user.id)
            }}>
            <img src={props.user.photoURL} alt="avatar" />
            <div className="about">
                <div className="name">{props.user.displayName}</div>
                <div className="status">
                    <i className={`fa fa-circle ${status==='online'?'online':'offline'}`}></i> {status}
                </div>
            </div>
        </li>
    )
}

export default User;