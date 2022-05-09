import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxiZBSR9ae0XHUemh_iasJX6vB7Sg1hw4",
    authDomain: "clone-1f467.firebaseapp.com",
    projectId: "clone-1f467",
    storageBucket: "clone-1f467.appspot.com",
    messagingSenderId: "140293620610",
    appId: "1:140293620610:web:5964d40ec62739c9fbc59b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };