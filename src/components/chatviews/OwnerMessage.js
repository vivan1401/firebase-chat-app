import React from 'react'
import moment from 'moment'
import MicrolinkCard from 'react-microlink'

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
                {props.isUrl(props.chatContent.content)?
                    <MicrolinkCard url={props.chatContent.content} size='large'></MicrolinkCard>
                    :props.chatContent.content}
            </div>
        </li>
    )
}

export default OwnerMessage;