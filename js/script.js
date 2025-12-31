

//Scroll bg change for navbar

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav-lists");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});

