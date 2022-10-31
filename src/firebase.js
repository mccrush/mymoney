import { initializeApp } from "firebase/app"
import apiKey from './../apiKey'

const firebaseConfig = {
  apiKey,
  authDomain: "mymoney-ba6d5.firebaseapp.com",
  projectId: "mymoney-ba6d5",
  storageBucket: "mymoney-ba6d5.appspot.com",
  messagingSenderId: "486557263590",
  appId: "1:486557263590:web:9874c12591871bde22fd27"
}

const fireApp = initializeApp(firebaseConfig)

export default fireApp

