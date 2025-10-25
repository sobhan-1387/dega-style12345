window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");
  const searchPage = document.getElementById("searchPage");
  const mainSearch = document.getElementById("mainSearch");
  const closeSearch = document.getElementById("closeSearch");
  const searchResults = document.getElementById("searchResults");

  cards.forEach(card => {
    const buy = card.querySelector(".buy");
    if (!buy || !searchPage || !mainSearch) return;
    buy.addEventListener("click", e => {
      e.preventDefault();
      searchPage.classList.add("active");
      mainSearch.focus();
      showSearchHistory();
    });
  });

  closeSearch?.addEventListener("click", () => {
    searchPage?.classList.remove("active");
  });

  mainSearch?.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const query = mainSearch.value.trim();
    if (!query) return;
    saveSearchHistory(query);
    showSearchHistory();
    mainSearch.value = "";
  });

  function saveSearchHistory(term) {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(term)) {
      history.unshift(term);
      if (history.length > 10) history.pop();
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  }

  function showSearchHistory() {
    if (!searchResults) return;
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.length) {
      searchResults.innerHTML = `<p style="color:#999;">هیچ جستجوی قبلی وجود ندارد.</p>`;
      return;
    }
    searchResults.innerHTML = `
      <h3>جستجوهای قبلی شما</h3>
      <ul>${history.map(item => `<li>${item}</li>`).join("")}</ul>`;
    searchResults.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        if (mainSearch) mainSearch.value = li.textContent;
        console.log("جستجو برای:", li.textContent);
      });
    });
  }
});
