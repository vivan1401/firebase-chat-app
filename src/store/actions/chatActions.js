import { actionList } from "./actionList";

export const createChat = (chat) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // make async call to database
        dispatch({
            type: actionList.CREATE_CHAT,
            chat
        });
    }
}

export const sendMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('chatContents').doc('WlOeo3gHfVLlpli6WXwk').set({content:[
            {
            isOwner: true,
            content: message,
            sentAt: new Date()
        }]})
        firestore.collection('chatContents').add({
            isOwner: true,
            content: message,
            sentAt: new Date()
        }).then(()=>{
            dispatch({
                type: actionList.SEND_MESSAGE,
                message
            })
        }).catch((err)=>{
            dispatch({
                type: actionList.SEND_MESSAGE_ERROR,
                err
            })
        })
    }
}