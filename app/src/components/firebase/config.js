import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp ({
    
        apiKey: "AIzaSyBzPfozJaUTayiNl0lMBOO9TAkJV24FFeU",
        authDomain: "primera-app-bd537.firebaseapp.com",
        projectId: "primera-app-bd537",
        storageBucket: "primera-app-bd537.appspot.com",
        messagingSenderId: "1077177545951",
        appId: "1:1077177545951:web:8b80ed59edb3332d36a56a"
    
});

export function getFirebase (){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}