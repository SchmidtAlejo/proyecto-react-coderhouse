import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2A-Hha3x1Y1zse4gwOE8f-AmdaBI45qY",
    authDomain: "bord-7e5dd.firebaseapp.com",
    projectId: "bord-7e5dd",
    storageBucket: "bord-7e5dd.appspot.com",
    messagingSenderId: "595531088684",
    appId: "1:595531088684:web:352d3da52dfceafc952289"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)