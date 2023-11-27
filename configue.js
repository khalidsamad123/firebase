import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js ";


const firebaseConfig = {
  apiKey: "AIzaSyDtGxLEWcPHk8Q3BjMLREImNZ-sr-DiNn8",
  authDomain: "signup-login-57478.firebaseapp.com",
  projectId: "signup-login-57478",
  storageBucket: "signup-login-57478.appspot.com",
  messagingSenderId: "1028488640714",
  appId: "1:1028488640714:web:94adc06c37d85ccdae1c33",
  measurementId: "G-NLEK9Y6HHJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

let btn =document.querySelector('#sibtn')
btn.addEventListener('click',()=>{
    let getemail=document.querySelector('#lemail')
    let getpass=document.querySelector('#lpass')
    
  signInWithEmailAndPassword(auth, getemail.value, getpass.value)
.then((userCredential) => {

  const user = userCredential.user;
  console.log(user)
  swal("Good job!", "You clicked the button!", "success");
 window.location='./index.html'

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
 console.log(error)

 swal("Here's the title!", "...and here's the text!");
 
 
});

})


