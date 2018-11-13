import React, { Component } from 'react'
import Search from './Search'
import User from './User'
import '../Style.css'
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createChat,search} from "../../store/actions/userActions";
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
    let messTime = []
    this.props.profile.conversations.forEach(conversation => {      
      let conIndex = _.findIndex(this.props.conversations,(o)=>(o.id === conversation.conversationId));
      let lastContent = this.props.conversations[conIndex].chatContents.length-1;
      if(lastContent > -1)
        messTime.push({uid: conversation.uid, sentAt: this.props.conversations[conIndex].chatContents[lastContent].sentAt});
    });

    //console.log('mess time', messTime)
    arraySort(this.props.users,'time',{reverse:true});
    if(messTime.length === 0){
      return this.props.users;
    }

    let userSort = []
    let userSort1 = []
    this.props.users.forEach(user=>{
      let messTimeIndex = _.findIndex(messTime,(o)=>(o.uid === user.id))
      user.sentAt = messTimeIndex>-1?messTime[messTimeIndex].sentAt:null;
      if(messTimeIndex>-1){
        userSort.push(user);
      }
      else{
        userSort1.push(user);
      }
    })

    arraySort(userSort,'sentAt',{reverse:true});    
    //console.log('after sort', [...userSort,...userSort1])
    return[...userSort,...userSort1];
  }

  handleSearch = (e)=>{
    this.props.search(e.target.value);
  }

  filterSearch = (users)=>{
    let userFilter = [];
    users.forEach(user=>{
      if(_.includes(user.displayName.toUpperCase(),this.props.searchStr.toUpperCase())){
        userFilter.push(user);
      }
    })
    return userFilter;
  }

  filterStar = (users)=>{
    this.props.profile.stars.forEach(star=>{
      let i = _.findIndex(users,(o)=>(o.id === star))
      if(i > -1){
        users.unshift(users[i]);
        users.splice(i+1,1);
      }
      //console.log('filter star',star);
    })
  }

  render() {
    let users = this.props.users;
    //console.log('userlist',this.props);  
    if(this.props.profile.conversations&& this.props.conversations.length !== 0){
      if(this.props.profile.conversations.length !== 0)
        users = this.getListUserSorted()
    }

    if(this.props.searchStr !== ''){
      users = this.filterSearch(users);
    }

    if(this.props.profile.stars){
      if(this.props.profile.stars.length !== 0)
        this.filterStar(users);
    }

    return (
      <div className="people-list" id="people-list">
        <Search handleSearch={this.handleSearch}></Search>
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
    conversations: state.firestore.ordered.conversations||[],
    searchStr: state.user.searchStr,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      createChat: (info) => dispatch(createChat(info)),
      search: (searchStr) => dispatch(search(searchStr)),
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    {collection: 'users'}
  ])  
)(UsersList);