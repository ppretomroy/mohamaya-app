// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
            apiKey: "AIzaSyDGdcloUf1txPnAKw3omIUrKULLsMdt3-g",
            authDomain: "mohamyats.firebaseapp.com",
            projectId: "https://mohamyats-default-rtdb.firebaseio.com",
            storageBucket: "mohamyats",
            messagingSenderId: "mohamyats.appspot.com",
            appId: "1:360025720421:web:8cddd9187de36de625688c"
        };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
