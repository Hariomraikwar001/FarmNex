import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "../firebase/firebase-config.js";

const signupBtn =
document.getElementById("signupBtn");

const loginBtn =
document.getElementById("loginBtn");

signupBtn.addEventListener("click", async () => {

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try {

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Registration Successful");

  } catch (error) {

    alert(error.message);

  }

});

loginBtn.addEventListener("click", async () => {

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Login Successful");

    window.location.href =
    "./dashboard.html";

  } catch (error) {

    alert(error.message);

  }

});