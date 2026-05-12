import { db } from "../firebase/firebase-configs.js";

import {
  collection,
  getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productsDiv =
document.getElementById("products");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){

  const existingProduct =
  cart.find((item)=>
    item.name === product.name
  );

  if(existingProduct){

    existingProduct.quantity += 1;

  }

  else{

    cart.push({

      ...product,
      quantity:1

    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert("Product Added To Cart");

}

async function loadProducts(){

  productsDiv.innerHTML =
  "<h2>Loading...</h2>";

  try{

    const querySnapshot =
    await getDocs(
      collection(db,"products")
    );

    productsDiv.innerHTML = "";

    querySnapshot.forEach((doc)=>{

      const product = doc.data();

      productsDiv.innerHTML += `

        <div class="card">

          <img
            src="${product.image}"
            class="product-image"
          />

          <h2>${product.name}</h2>

          <p class="price">
            ₹${product.price}
          </p>

          <p class="stock">
            Stock: ${product.stock}
          </p>

          ${
            product.stock < 20
            ?
            `<p class="alert">
              ⚠ Low Stock Alert
            </p>`
            :
            ""
          }

          <button
          onclick='addToCart(${JSON.stringify(product)})'>

            Add to Cart

          </button>

        </div>

      `;

    });

  }

  catch(error){

    console.log(error);

    productsDiv.innerHTML =
    "<h2>Error Loading Products</h2>";

  }

}

window.addToCart = addToCart;

loadProducts();