import { actionList } from "./actionList";

export const createChat = (chat) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('conversations').add({
            chatContents: [],
        }).then((e)=>{
            //console.log('createchat',e)

            firestore.collection('users').doc(chat.ownerId).update({
                conversations: [...chat.ownerConversations, 
                    {conversationId: e.id, uid: chat.otherId}]
            }).then(()=>{
                firestore.collection('users').doc(chat.otherId).update({
                    conversations: [...chat.otherConversations, 
                        {conversationId: e.id, uid: chat.ownerId}]
                }).then(()=>{
                    dispatch({
                        type: actionList.CREATE_CHAT,
                        chat
                    });
                }).then(()=>{
                    chat.history.push(`/chat/${chat.otherId}/${e.id}`)
                }).catch((err)=>{
                    dispatch({
                        type: actionList.CREATE_CHAT_ERROR,
                        err
                    })
                })
            }).catch((err)=>{
                dispatch({
                    type: actionList.CREATE_CHAT_ERROR,
                    err
                })
            })
        }).catch((err)=>{
            dispatch({
                type: actionList.CREATE_CHAT_ERROR,
                err
            })
        })
    }
}

export const search = (searchStr)=>(
    {
        type: actionList.SEARCH,
        searchStr
    }
)

export const star = (starInfo)=>{
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('users').doc(starInfo.ownerId).update({
            stars: starInfo.stars
        }).then(()=>{
            dispatch({
                type: actionList.STAR
            });
        }).catch((err)=>{
            dispatch({
                type: actionList.STAR_ERROR,
                err
            })
        })
    }
}