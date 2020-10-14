import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAS4Kxx-3yAT1g0qurq1X4gBiUSSivzAG4",
  authDomain: "motoplus-cf8aa.firebaseapp.com",
  databaseURL: "https://motoplus-cf8aa.firebaseio.com",
  projectId: "motoplus-cf8aa",
  storageBucket: "motoplus-cf8aa.appspot.com",
  messagingSenderId: "74377946089",
  appId: "1:74377946089:web:6ef3f35c0b83c886dde178",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
