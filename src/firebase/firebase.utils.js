import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyByPCxCkYJUM1oY5JyToJkwTEJ70B_sZqY",
    authDomain: "clothingapp-store.firebaseapp.com",
    projectId: "clothingapp-store",
    storageBucket: "clothingapp-store.appspot.com",
    messagingSenderId: "383551142547",
    appId: "1:383551142547:web:07237ebb0a14ee2586ab66",
    measurementId: "G-S4WS5G04J0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;