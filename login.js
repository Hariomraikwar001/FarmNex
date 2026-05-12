import { auth }
from "./firebase/firebase-configs.js";

import {

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword

} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const email =
document.getElementById("email");

const password =
document.getElementById("password");

const signupBtn =
document.getElementById("signupBtn");

const loginBtn =
document.getElementById("loginBtn");

signupBtn.addEventListener("click", () => {

  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )

  .then(() => {

    alert("Signup Successful");

  })

  .catch((error) => {

    alert(error.message);
  });
});

loginBtn.addEventListener("click", () => {

  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )

  .then(() => {

    alert("Login Successful");

    window.location.href =
"./consumer/marketplace.html";

  })

  .catch((error) => {

    alert(error.message);
  });
});