import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqfPMHtokdDXnWFtV5Exqmnv3UFA1YIII",
    authDomain: "react-sandbox-d852e.firebaseapp.com",
    databaseURL: "https://react-sandbox-d852e.firebaseio.com",
    projectId: "react-sandbox-d852e",
    storageBucket: "react-sandbox-d852e.appspot.com",
    messagingSenderId: "973651558758",
    appId: "1:973651558758:web:a2ab38e7c31b7e19a648a7",
    measurementId: "G-5ZDX1ETKHK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();