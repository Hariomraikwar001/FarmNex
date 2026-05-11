productList.innerHTML += `

  <div class="card">

    <img
    src="${product.image}"
    width="100%">

    <h2>${product.name}</h2>

    <p>Price: ₹${product.price}</p>

    <p>Stock: ${product.stock}</p>

    <button>
      Buy Now
    </button>

  </div>

`;