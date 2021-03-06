import {actionList} from "../actions/actionList";

const initState = {
    inputMess: '',
    chatContents: [
        {isOwner: true, content: 'I am the bone of my sword!'},
        {isOwner: false, content: 'Steel is my body, and fire is my blood!'},
        {isOwner: false, content: 'Steel is my body, and fire is my blood! aaaaaaaaaaaaaaaaaaaaa'},
        {isOwner: true,content: 'Unknown to death, nor known to life!'},
        {isOwner: true, content: 'I am the bone of my sword!aaaaaaaaaaaaaaa bb'},
        {isOwner: false, content: 'Steel is my body, and fire is my blood! asdfasdfdsaa dfadsfd 2 3f qf wfdasfa fda'},
    ]
}

const chatReducer = (state = initState, action) =>{
    switch (action.type){
        case actionList.SEND_MESSAGE:
            console.log('Send message success')
            return {
                ...state,
                inputMessage: '',
                chatContents: [...state.chatContents,
                        {isOwner:true, content: action.message}]
            };
        case actionList.SEND_MESSAGE_ERROR:
            console.log('Send message error', action.err)
            return state;
        case actionList.INPUT_MESSAGE:
            return {
                ...state,
                inputMess: action.inputMess
            }
        default: 
            return state;
    }
}

export default chatReducer;