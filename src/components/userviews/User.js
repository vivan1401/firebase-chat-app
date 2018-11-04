import React from 'react'

const User = ({user}) =>{
    let status = user.isOnline ? "online":"offline"
    return (
        <li className="clearfix">
            <img src={user.photoURL} alt="avatar" />
            <div className="about">
                <div className="name">{user.displayName}</div>
                <div className="status">
                    <i className={`fa fa-circle ${status}`}></i> {status}
                </div>
            </div>
        </li>
    )
}

export default User;