import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbS-8V8ImZ-OreILmEHJD9qitS7qh2xyM",
  authDomain: "portifolio-ae333.firebaseapp.com",
  projectId: "portifolio-ae333",
  storageBucket: "portifolio-ae333.appspot.com",
  messagingSenderId: "921702706234",
  appId: "1:921702706234:web:0a480c2341101b926ad903"
};

const app = initializeApp(firebaseConfig);
console.log(app)