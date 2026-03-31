// firebase.js
const firebaseConfig = {
  apiKey: "여기에 입력",
  authDomain: "여기에 입력",
  projectId: "여기에 입력",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();