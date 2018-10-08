import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyD-TZq7HPccVzlap3Ub90KZo9Q0M8hMsS0",
    authDomain: "react-marioplan-42d14.firebaseapp.com",
    databaseURL: "https://react-marioplan-42d14.firebaseio.com",
    projectId: "react-marioplan-42d14",
    storageBucket: "react-marioplan-42d14.appspot.com",
    messagingSenderId: "694074219786"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;