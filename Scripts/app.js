// setTimeout(()=>{
//     window.location='./pages/signup.html'
// },3000)

import { auth, onAuthStateChanged } from "./firebase.js";

// firebase function to check if user is logged-in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    // window.location = "./index.html";
    console.log("login ha ya ", user);
  } else {
    // User is logout

    setTimeout(() => {
      window.location = "./pages/signup.html";
    }, 3000);
  }
});
