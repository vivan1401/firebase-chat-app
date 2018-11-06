import React from 'react'
import moment from 'moment'

const OwnerMessage = (props) =>{
    return (
        <li>
            <div className="message-data">
                {//<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                }
                <span className="message-data-time">{props.chatContent.sentAt?
                    moment(props.chatContent.sentAt.toDate()).calendar():''}</span>
            </div>
            <div className="message my-message">
              {props.chatContent.content}
            </div>
        </li>
    )
}

export default OwnerMessage;