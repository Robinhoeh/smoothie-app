import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7wzFGn_q5b64ENJSnKwuFN_2gWajjfcY",
  authDomain: "udemy-ninja-smoothies-28cc8.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-28cc8.firebaseio.com",
  projectId: "udemy-ninja-smoothies-28cc8",
  storageBucket: "udemy-ninja-smoothies-28cc8.appspot.com",
  messagingSenderId: "911600102787"
};

const firebaseApp = firebase.initializeApp(config);

// export firestore DB - allows you to import and interact with from other files
export default firebaseApp.firestore();