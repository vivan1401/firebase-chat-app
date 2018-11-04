import React from 'react'

const OtherMessage = ({content}) =>{
    return (
        <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              {content}
            </div>
        </li>
    )
}

export default OtherMessage;