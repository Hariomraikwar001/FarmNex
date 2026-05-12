const cartItemsContainer =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {

  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {

    total +=
      Number(product.price) *
      product.quantity;

    cartItemsContainer.innerHTML += `
      <div class="product-card">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <p>Quantity: ${product.quantity}</p>

        <button onclick="increaseQty(${index})">
          +
        </button>

        <button onclick="decreaseQty(${index})">
          -
        </button>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>
    `;
  });

  totalPrice.innerText =
    "Total: ₹" + total;
}

function increaseQty(index) {

  cart[index].quantity += 1;

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  loadCart();
}

function decreaseQty(index) {

  if (cart[index].quantity > 1) {

    cart[index].quantity -= 1;

  } else {

    cart.splice(index, 1);
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  loadCart();
}

function removeItem(index) {

  cart.splice(index, 1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  loadCart();
}

loadCart();