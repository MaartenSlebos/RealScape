// Firebase config
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
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  // Google Sign-In
  const googleButton = document.getElementById("googleSignInButton");
  if (googleButton) {
    googleButton.addEventListener("click", function() {
      console.log("Google button clicked!");
      auth.signInWithPopup(googleProvider)
        .then((result) => {
          const user = result.user;
          document.getElementById("pointsDisplay").innerText = `Welcome, ${user.displayName}! You’ve earned 10 XP!`;
          console.log("User:", user.uid, user.email);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("Google sign-in failed: " + error.message);
        });
    });
  }
  
  // Email/Password Sign-Up
  const signUpButton = document.getElementById("signUpButton");
  if (signUpButton) {
    signUpButton.addEventListener("click", function() {
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;
      console.log("Sign-up clicked!", email);
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          document.getElementById("pointsDisplay").innerText = `Welcome, ${user.email}! You’ve earned 10 XP!`;
          console.log("New User:", user.uid, user.email);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("Sign-up failed: " + error.message);
        });
    });
  }
  
  // Email/Password Sign-In
  const signInButton = document.getElementById("signInButton");
  if (signInButton) {
    signInButton.addEventListener("click", function() {
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;
      console.log("Sign-in clicked!", email);
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          document.getElementById("pointsDisplay").innerText = `Welcome back, ${user.email}! You’ve earned 10 XP!`;
          console.log("User:", user.uid, user.email);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("Sign-in failed: " + error.message);
        });
    });
  }