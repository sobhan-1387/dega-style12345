
// --------------------------
// JS حرفه‌ای ریسپانسیو
// --------------------------
function toggleCart() {
  const cartBox = document.getElementById('cartBox');
  cartBox.classList.toggle('show');
}

document.addEventListener('click', function(event) {
  const cartBox = document.getElementById('cartBox');
  const cartContainer = document.querySelector('.cart-container');
  if (!cartBox.contains(event.target) && !cartContainer.contains(event.target)) {
    cartBox.classList.remove('show');
  }
});

const searchButton = document.querySelector('.buy');
const searchPage = document.getElementById('searchPage');
const closeSearch = document.getElementById('closeSearch');

searchButton.addEventListener('click', () => { searchPage.style.display = 'block'; });
closeSearch.addEventListener('click', () => { searchPage.style.display = 'none'; });

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth >= 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
      dropdown.addEventListener('mouseover', function () {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        bsDropdown.show();
      });
      dropdown.addEventListener('mouseleave', function () {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        bsDropdown.hide();
      });
    });
  }
});

