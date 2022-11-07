import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLzOfWAqdFU8KsIwyDdvr8xx3IQdPzLdA",
    authDomain: "netflix-clone-a2c7d.firebaseapp.com",
    projectId: "netflix-clone-a2c7d",
    storageBucket: "netflix-clone-a2c7d.appspot.com",
    messagingSenderId: "781175474179",
    appId: "1:781175474179:web:6ff7a69ab054ad153b6636"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;