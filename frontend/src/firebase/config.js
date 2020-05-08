
import firebase from 'firebase';

const config = {
 
  apiKey: "AIzaSyAHBizl58mKINbPPdWKzn_NNCQclbg8Rys",
  authDomain: "login-8be9d.firebaseapp.com",
  databaseURL: "https://login-8be9d.firebaseio.com",
  projectId: "login-8be9d",
  storageBucket: "login-8be9d.appspot.com",
  messagingSenderId: "237488543680",
  appId: "1:237488543680:web:4f4b20a2714e1978fa9a25",
  measurementId: "G-TN6Q26LKJ7"
  };

const Config = firebase.initializeApp(config);  
export default Config;