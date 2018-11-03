import React from 'react'

const OwnerMessage = () =>{
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                <span className="message-data-time">10:20 AM, Today</span>
            </div>
            <div className="message my-message">
                Actually everything was fine. I'm very excited to show this to our team.
            </div>
        </li>
    )
}

export default OwnerMessage;