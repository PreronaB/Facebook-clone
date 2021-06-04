// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYkqwz-f-AX53a_wn5vzOamcnp9J9J8Nk",
    authDomain: "facebook-clone-47e55.firebaseapp.com",
    projectId: "facebook-clone-47e55",
    storageBucket: "facebook-clone-47e55.appspot.com",
    messagingSenderId: "732172533055",
    appId: "1:732172533055:web:3b24cafb4e85867f97e78a",
    measurementId: "G-58VQW6BLMH"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;