
function toggleCart() {
    const cartBox = document.getElementById('cartBox');
    cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}


document.addEventListener('click', function(e) {
    const cartBox = document.getElementById('cartBox');
    const cartContainer = document.querySelector('.cart-container');
    if (!cartContainer.contains(e.target) && !cartBox.contains(e.target)) {
        cartBox.style.display = 'none';
    }
});


document.querySelectorAll('.navbar-toggler').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = document.querySelector(this.dataset.bsTarget);
        if (target.style.display === 'block') {
            target.style.display = 'none';
        } else {
            target.style.display = 'block';
        }
    });
});
