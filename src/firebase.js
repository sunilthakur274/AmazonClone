import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9hSC6wlVEJrFd9WAEInxYupceLt0OLRc",
  authDomain: "clone-2c3be.firebaseapp.com",
  projectId: "clone-2c3be",
  storageBucket: "clone-2c3be.appspot.com",
  messagingSenderId: "392619733537",
  appId:"1:392619733537:web:28a371f8c920f2a21ca960",
  measurementId: "G-WJ7V4GQMSF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app , auth } 