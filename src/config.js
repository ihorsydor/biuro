import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCYKb83IZmDZWDLXmnuQQQWSOn_6gegSgA",
    authDomain: "biuro-553f1.firebaseapp.com",
    databaseURL: "https://biuro-553f1.firebaseio.com",
    projectId: "biuro-553f1",
    storageBucket: "biuro-553f1.appspot.com",
    messagingSenderId: "638023812421",
    appId: "1:638023812421:web:6c2df756934837380e2a2c"
};
firebase.initializeApp(firebaseConfig);
export default firebase;