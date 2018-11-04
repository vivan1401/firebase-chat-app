const initState = {
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
    return state;
}

export default userReducer;