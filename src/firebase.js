import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2vE4r-WZLALhKILkvHKfMyDVInAhiW7o",
  authDomain: "robinhood-clone-34ab9.firebaseapp.com",
  projectId: "robinhood-clone-34ab9",
  storageBucket: "robinhood-clone-34ab9.appspot.com",
  messagingSenderId: "4843804631",
  appId: "1:4843804631:web:fc05094bf04146a7b69d92",
  measurementId: "G-WGG5BMEN7K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
