import {
  db
}
from "../firebase/firebase-configs.js";

import {
  collection,
  addDoc,
  getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btn =
document.getElementById("addBtn");

btn.addEventListener("click", async () => {

  const name =
  document.getElementById("name").value;

  const price =
  document.getElementById("price").value;

  const stock =
  document.getElementById("stock").value;

  const image =
  document.getElementById("image").value;

  try {

    await addDoc(
      collection(db, "products"),
      {
        name,
        price,
        stock,
        image 
      }
    );

    alert("Product Added Successfully");

  } catch (error) {

    console.log(error);

  }

});async function loadDashboardStats(){

  const querySnapshot =
  await getDocs(
    collection(db, "products")
  );

  let totalProducts = 0;
  let lowStock = 0;
  let revenue = 0;

  querySnapshot.forEach((doc)=>{

    const product = doc.data();

    totalProducts++;

    revenue +=
    Number(product.price) *
    Number(product.stock);

    if(product.stock < 20){

      lowStock++;

    }

  });

  document.getElementById(
    "totalProducts"
  ).innerText =
  "Total Products: " + totalProducts;

  document.getElementById(
    "lowStock"
  ).innerText =
  "Low Stock: " + lowStock;

  document.getElementById(
    "revenue"
  ).innerText =
  "Revenue: ₹" + revenue;

}

loadDashboardStats();