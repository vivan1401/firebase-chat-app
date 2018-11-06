import React from 'react'
import moment from 'moment'

const OtherMessage = (props) =>{
    //console.log('message',props)
    return (
        <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >{props.chatContent.sentAt?
                    moment(props.chatContent.sentAt.toDate()).calendar():''}</span>
              {//<span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              }
            </div>
            <div className="message other-message float-right">
              {props.chatContent.content}
            </div>
        </li>
    )
}

export default OtherMessage;