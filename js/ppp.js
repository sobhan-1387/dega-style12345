document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const product = e.target.closest('.product');
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price);

    cart.push({ name, price });
    updateCartUI();
  });
});
