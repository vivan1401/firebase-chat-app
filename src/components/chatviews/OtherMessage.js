import React from 'react'

const OtherMessage = () =>{
    return (
        <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
        </li>
    )
}

export default OtherMessage;