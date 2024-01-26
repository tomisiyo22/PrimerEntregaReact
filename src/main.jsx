import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUt4qReI5sF5jGJbEOj84LiSTKdUDcsBM",
  authDomain: "leafy-display-385615.firebaseapp.com",
  projectId: "leafy-display-385615",
  storageBucket: "leafy-display-385615.appspot.com",
  messagingSenderId: "208954141692",
  appId: "1:208954141692:web:0028d54a57ca0f959a6079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ ChakraProvider>,
)
