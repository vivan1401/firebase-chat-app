import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-database'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6p8iffCLVov3lOkwHbYnu185WgTeUnkM",
    authDomain: "fir-chat-app-bf63a.firebaseapp.com",
    databaseURL: "https://fir-chat-app-bf63a.firebaseio.com",
    projectId: "fir-chat-app-bf63a",
    storageBucket: "fir-chat-app-bf63a.appspot.com",
    messagingSenderId: "921747472730"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;