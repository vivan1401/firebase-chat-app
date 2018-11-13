import { actionList } from "../actions/actionList";

const initState = {
    searchStr: '',
    users: [{
            id: '1',
            displayName: 'Vincent Porter',
            isOnline: true,
            photoURL: 'https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg'
        },
        {
            id: '2',
            displayName: 'Vi Văn',
            isOnline: false,
            photoURL: 'https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg'
        },
        {
            id: '3',
            displayName: 'Long Tứ',
            isOnline: true,
            photoURL: 'https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg'
        },
        {
            id: '4',
            displayName: 'Vincent Porter',
            isOnline: false,
            photoURL: 'https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg'
        },
        {
            id: '5',
            displayName: 'Vincent Porter',
            isOnline: true,
            photoURL: 'https://lh5.googleusercontent.com/-t-43FwUhtnQ/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbBMpkbrz-N9oXNBvoNJnFw1PkQ_0w/mo/photo.jpg'
        }
    ]
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case actionList.CREATE_CHAT:
            console.log(actionList.CREATE_CHAT)
            return state;
        case actionList.CREATE_CHAT_ERROR:
            console.log(actionList.CREATE_CHAT_ERROR, action.err)
            return state;
        case actionList.SEARCH:
            return {
                ...state,
                searchStr: action.searchStr
            }
        case actionList.STAR:
            console.log(actionList.STAR)
            return state;
        case actionList.STAR_ERROR:
            console.log(actionList.STAR_ERROR, action.err)
            return state;
        default:
            return state;
    }
}

export default userReducer;