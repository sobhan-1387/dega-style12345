// window.addEventListener("load", () => {
//     const basket = document.getElementById("basket");
//     const input = document.getElementById(".input");
//     input.forEach(search => {
//         const dokme = search.getElementById("as");
//         dokme.addEventListener("click", (e) => {
//             let cardMan = search.cloneNode(true);
//             let close = document.createElement("button");
//             let flex = document.createElement("div");
//             let search = document.createElement("input");
//             search.setAttribute("type", "search");
//             flex.classList.add("flex");
//             close.innerText = "*";
//             cardMan.append(flex);
//             basket.append(cardMan);
//             basket.classList.add("active");
//             close.addEventListener("click", () => {

//             })
//             console.log(basket.childNodes.length);
//         });
//     })
// })
window.addEventListener("load", () => {
    const basket = document.getElementById("basket");
    const ali = document.querySelectorAll(".ali");
    ali.forEach(card => {
        var buy = card.querySelector(".buy");
        buy.addEventListener("click", (e) => {
            e.preventDefault();
            let cardMan = card.cloneNode(false);
            let close = document.createElement("button");
            let quentity = document.createElement("form");
            let numbetg = document.createElement("input");
            numbetg.setAttribute("type", "number");
            close.innerText = "*";
            quentity.append(numbetg);
            basket.append(cardMan);
            basket.classList.add("active");
            close.addEventListener("click", () => {
                basket.classList.remove("active");
            })
            plus.addEventListener("click", () => {
                numbetg.value = parseInt(numbetg.value) + 1;
            })
            minus.addEventListener("click", () => {
                if (parseInt(numbetg.value) !== 1) {
                    numbetg.value = parseInt(numbetg.value) - 1;
                }
            })
            console.log(basket.childNodes);
        });
    })
})