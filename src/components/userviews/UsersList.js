import React, { Component } from 'react'
import Search from './Search'
import User from './User'
import '../Style.css'
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createChat } from "../../store/actions/userActions";
import _ from "lodash";
import arraySort from 'array-sort' 

class UsersList extends Component {
  userClick = (uid,otherConversations)=>{
    let index = _.findIndex(this.props.users,(user)=>{
      return user.id === uid;
    });

    let conversations = this.props.profile.conversations;
    
    //console.log('userClick',this.props)

    if(!conversations){
      //Tạo chat mới
      this.props.createChat({
        ownerId: this.props.auth.uid,
        ownerConversations: [],
        otherId: uid,
        otherConversations: otherConversations?otherConversations:[],
        history: this.props.history
      });
      return;
    }

    let conversationsIndex = _.findIndex(conversations,(conv)=>(conv.uid === this.props.users[index].id));
    if(conversationsIndex === -1){
      this.props.createChat({
        ownerId: this.props.auth.uid,
        ownerConversations: this.props.profile.conversations,
        otherId: uid,
        otherConversations: otherConversations,
        history: this.props.history
      });
    }
    else{
      this.props.history.push('/chat/'+uid+'/'+conversations[conversationsIndex].conversationId)
    }
  }

  getListUserSorted = ()=>{
    let messTime = this.props.profile.conversations.map((conversation,index)=>{
      let conIndex = _.findIndex(this.props.conversations,(o)=>(o.id === conversation.conversationId));
      let lastContent = this.props.conversations[conIndex].chatContents.length-1;
      return {uid: conversation.uid, sentAt: this.props.conversations[conIndex].chatContents[lastContent].sentAt};
    })

    arraySort(messTime,'sentAt',{reverse: true});

    let userSorted= messTime.map((mess, index)=>{
      let userIndex = _.findIndex(this.props.users,(user)=>(user.id===mess.uid));
      return this.props.users[userIndex];
    })

    return userSorted;
  }

  render() {
    let users = this.props.users;
    //console.log('userlist',this.props);  
    if(this.props.profile.conversations && this.props.conversations.length !== 0){
      users = this.getListUserSorted()
    }
    return (
      <div className="people-list" id="people-list">
        <Search></Search>
        <ul className="list">
          {
            users.map((user,index)=>{
              if(user.id !== this.props.auth.uid)
              return(
                <User user={user} curId={this.props.auth.uid} key={index} userClick={this.userClick}></User>
              )
              else
                return null
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  //console.log('userl',state )
  return{
    users: state.firestore.ordered.users||[],
    profile: state.firebase.profile,
    conversations: state.firestore.ordered.conversations||[]
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      createChat: (info) => dispatch(createChat(info))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    {collection: 'users'}
  ])  
)(UsersList);