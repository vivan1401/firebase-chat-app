import { actionList } from "./actionList";

export const sendMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        //console.log('chataction',message)
        firestore.collection('conversations').doc(message.conversation.id).update({chatContents:
            [...message.conversation.chatContents,
                {
                    userId: message.uid,
                    isOwner: true,
                    content: message.content,
                    sentAt: new Date()
                }
            ]
        }).then(()=>{
            dispatch({
                type: actionList.SEND_MESSAGE,
                message:message.content
            })
        }).catch((err)=>{
            dispatch({
                type: actionList.SEND_MESSAGE_ERROR,
                err
            })
        })
    }
}

export const inputMessage = (inputMess)=>(
    {
        type: actionList.INPUT_MESSAGE,
        inputMess
    }
)