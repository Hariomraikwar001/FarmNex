import {
  db,
  collection,
  addDoc
} from "../firebase/firebase-config.js";

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

});