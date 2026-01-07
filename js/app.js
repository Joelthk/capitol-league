import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyCjotIoBJtRrp3p3q6s9TSdZ044pAQoB20",
  authDomain: "capitol-league.firebaseapp.com",
  projectId: "capitol-league",
  storageBucket: "capitol-league.firebasestorage.app",
  messagingSenderId: "243628029572",
  appId: "1:243628029572:web:216113ddf24fba4ceab4d1"
};
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
