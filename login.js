function login(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  if(

    email === "farmer@farmnex.com"
    &&

    password === "123456"

  ){

    alert("Farmer Login Success");

    window.location.href =
    "./farmer/dashboard.html";

  }

  else if(

    email === "user@farmnex.com"
    &&

    password === "123456"

  ){

    alert("Consumer Login Success");

    window.location.href =
    "./products/products.html";

  }

  else{

    alert("Invalid Email or Password");

  }

}