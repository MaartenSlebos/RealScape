// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRZ5n-pl3tRqDSk1gum_uGlmfr_Y_gA9U",
  authDomain: "realscape-591e2.firebaseapp.com",
  projectId: "realscape-591e2",
  storageBucket: "realscape-591e2.firebasestorage.app",
  messagingSenderId: "176101686627",
  appId: "1:176101686627:web:9d23570abf1597c2ee2756",
  measurementId: "G-YJ216J5GCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("joinButton").addEventListener("click", function() {
    document.getElementById("pointsDisplay").innerText = "You’ve earned 10 XP for starting your journey!";
  });