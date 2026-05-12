console.log("admin.js loaded");

import { db } from "../../firebase/firebase-configs.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const name = document.getElementById("name");
const price = document.getElementById("price");
const stock = document.getElementById("stock");

const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

  console.log("button clicked");

  try {

    await addDoc(collection(db, "products"), {

      name: name.value,
      price: Number(price.value),
      stock: Number(stock.value)

    });

    alert("Product Uploaded");

    name.value = "";
    price.value = "";
    stock.value = "";

  } catch (error) {

    console.log(error);
    alert(error.message);

  }

});