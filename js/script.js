window.addEventListener("load", () => {
    let actions = document.querySelectorAll(".actions");
    actions.forEach(action => {
        action.addEventListener("click", e => {
            e.preventDefault();
            let bind = action.dataset.bind;
            console.log(bind);
            let khas = document.querySelectorAll(".khas");
            khas.forEach(item => {
                item.classList.remove("active");
            })
            let theDiv = document.getElementById(bind);
            console.log(theDiv);
            theDiv.classList.add("active");
        })
    })
    const paragraph2 = document.getElementById('paragraph2');
    const showMore = document.getElementById('show-more');
    const showLess = document.getElementById('show-less');

    showMore.addEventListener('click', () => {
        paragraph2.style.display = 'block'; 
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });

    showLess.addEventListener('click', () => {
        paragraph2.style.display = 'none';
        showMore.style.display = 'inline';
        showLess.style.display = 'none';
    });
});