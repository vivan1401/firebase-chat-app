import React from 'react'
import moment from 'moment'
import MicrolinkCard from 'react-microlink'

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
              {props.isUrl(props.chatContent.content)?
                <MicrolinkCard url={props.chatContent.content} size='large'></MicrolinkCard>
                :props.chatContent.content}
            </div>
        </li>
    )
}

export default OtherMessage;