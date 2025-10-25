

    const products = [
      "ساعت مچی", "کفش اسپرت", "لباس مردانه", "لباس زنانه",
      "گوشی موبایل", "هدفون", "عینک آفتابی", "کوله پشتی",
      "لباس بچگانه", "ساعت هوشمند"
    ];

    const searchPage = document.getElementById("searchPage");
    const mainSearch = document.getElementById("mainSearch");
    const closeSearch = document.getElementById("closeSearch");
    const liveResults = document.getElementById("liveResults");
    const searchHistoryDiv = document.getElementById("searchHistory");
    const buyButtons = document.querySelectorAll(".buy");


    buyButtons.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        searchPage.classList.add("active");
        mainSearch.focus();
        renderSearchHistory();
        liveResults.innerHTML = "";
      });
    });


    closeSearch.addEventListener("click", () => {
      searchPage.classList.remove("active");
      mainSearch.value = "";
      liveResults.innerHTML = "";
    });


    function saveSearchHistory(term) {
      let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      if (!history.includes(term)) {
        history.unshift(term);
        if (history.length > 10) history.pop();
        localStorage.setItem("searchHistory", JSON.stringify(history));
      }
    }

    function renderSearchHistory() {
      let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      if (history.length === 0) {
        searchHistoryDiv.innerHTML = "";
        return;
      }
      let html = `<h3>جستجوهای قبلی شما</h3><ul>`;
      history.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += `</ul>`;
      searchHistoryDiv.innerHTML = html;

      document.querySelectorAll(".search-history li").forEach(li => {
        li.addEventListener("click", () => {
          mainSearch.value = li.textContent;
          doSearch(li.textContent);
        });
      });
    }

    mainSearch.addEventListener("input", () => {
      const query = mainSearch.value.trim();
      if (query === "") {
        liveResults.innerHTML = "";
        return;
      }
      const filtered = products.filter(p => p.includes(query));
      renderLiveResults(filtered);
    });

    mainSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = mainSearch.value.trim();
        if (query === "") return;
        saveSearchHistory(query);
        renderSearchHistory();
        liveResults.innerHTML = "";
      }
    });

    function renderLiveResults(results) {
      if (results.length === 0) {
        liveResults.innerHTML = "<p>هیچ نتیجه‌ای یافت نشد.</p>";
        return;
      }
      let html = "<ul>";
      results.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += "</ul>";
      liveResults.innerHTML = html;

      document.querySelectorAll(".live-results li").forEach(li => {
        li.addEventListener("click", () => {
          mainSearch.value = li.textContent;
          saveSearchHistory(li.textContent);
          renderSearchHistory();
          liveResults.innerHTML = "";
        });
      });
    }
