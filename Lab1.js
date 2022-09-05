
var firebase = require('firebase/app')
const { getDatabase, ref, onValue, set, update } = require('firebase/database'); 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqjnMe-R7ZsNVNpJXNzE2zSdvwUvzS6P8",
  authDomain: "senior-design-lab-1-1c890.firebaseapp.com",
  databaseURL: "https://senior-design-lab-1-1c890-default-rtdb.firebaseio.com",
  projectId: "senior-design-lab-1-1c890",
  storageBucket: "senior-design-lab-1-1c890.appspot.com",
  messagingSenderId: "651404526549",
  appId: "1:651404526549:web:7158e1023954d5f4ca735c",
  measurementId: "G-74DKBEQ6YC"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );



const database = getDatabase();