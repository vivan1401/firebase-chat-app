import { actionList } from "./actionList";

export const signIn =  (credentials) =>{
    return (dispatch, getState, {getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then((result) =>{
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('user',user);
            console.log('token',token);

            return firestore.collection('users').doc(user.uid).set({
                displayName: user.displayName,
                photoURL: user.photoURL,
                isOnline: true,
                time: new Date()
            });
          }).then(()=>{
            dispatch({type: actionList.LOGIN_SUCCESS});
          }).catch((error) => {
            var errorMessage = error.message;
            console.log('login error', errorMessage)
            
            dispatch({type: actionList.LOGIN_FAIL, errorMessage}, error);
          });
    }
}

export const signOut =  (credentials) =>{
    return (dispatch, getState, {getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        const firestore = getFirestore();
        
        firebase.auth().signOut().then((result) =>{
            return firestore.collection('users').doc(user.uid).update({
                isOnline: false,
                time: new Date()
            })
        }).then((result) =>{
            dispatch({type: actionList.LOGOUT});
        })
    }
}