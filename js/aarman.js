let cart = [];

function addToCart(button) {
  const product = button.closest('.product');
  const name = product.querySelector('h3').innerText;
  const price = parseInt(product.querySelector('p').innerText);
  const image = product.querySelector('img').src;

  cart.push({ name, price, image });
  updateCartUI();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const cartPayment = document.getElementById('cartPayment');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; color:#999;">سبد خرید خالی است</p>';
    cartTotal.innerText = 'جمع کل: 0 تومان';
    cartPayment.innerHTML = '';
  } else {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString()} تومان</p>
        </div>
        <span class="cart-item-remove" onclick="removeItem(${index})">&times;</span>
      `;
      cartItems.appendChild(div);
    });

    cartTotal.innerText = `جمع کل: ${total.toLocaleString()} تومان`;


    cartPayment.innerHTML = `
      <button class="pay-btn" onclick="checkout(${total})">پرداخت</button>
    `;
  }

  cartCount.innerText = cart.length;
}

function checkout(total) {
  alert(`مبلغ ${total.toLocaleString()} تومان پرداخت شد ✅`);
  cart = [];
  updateCartUI();
}
