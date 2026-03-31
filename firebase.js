// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCmjuNJo7YvIewnPAZ2ATLQcb3iKgebSjM",
    authDomain: "content-lab-site.firebaseapp.com",
    projectId: "content-lab-site",
    storageBucket: "content-lab-site.firebasestorage.app",
    messagingSenderId: "345932911293",
    appId: "1:345932911293:web:c0f158a04dcaf130285dd4",
    measurementId: "G-KXYDHHYM9J"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
