import React from 'react'

const OwnerMessage = ({content}) =>{
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                <span className="message-data-time">10:20 AM, Today</span>
            </div>
            <div className="message my-message">
              {content}
            </div>
        </li>
    )
}

export default OwnerMessage;