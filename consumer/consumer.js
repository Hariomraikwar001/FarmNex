import { db, auth }
from "../firebase/firebase-configs.js";

import {
  collection,
  getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { signOut }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const productsContainer =
document.getElementById("productList");

async function loadProducts() {

  const querySnapshot =
    await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {

    const product = doc.data();

    productsContainer.innerHTML += `
      <div class="product-card">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <p>Stock: ${product.stock}</p>

        <button class="addToCart">
          Add To Cart
        </button>

      </div>
    `;
  });

  const buttons =
    document.querySelectorAll(".addToCart");

  buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

      const product =
        querySnapshot.docs[index].data();

      let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct =
        cart.find(
          item => item.name === product.name
        );

      if (existingProduct) {

        existingProduct.quantity += 1;

      } else {

        product.quantity = 1;

        cart.push(product);
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      alert("Product Added To Cart");
    });
  });
}

onAuthStateChanged(auth, (user) => {

  if (user) {

    loadProducts();

  } else {

    window.location.href =
    "../login.html";
  }
});
const logoutBtn =
document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

  signOut(auth)

  .then(() => {

    alert("Logout Successful");

    window.location.href =
    "../login.html";
  })

  .catch((error) => {

    alert(error.message);
  });
});