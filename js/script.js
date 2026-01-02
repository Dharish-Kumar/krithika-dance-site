

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


//testimonial swipper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    //loop: true,
    loopAdditionalSlides: 2,   
    watchSlidesProgress: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: true,
    },
    
    pagination: {
        el: ".swiper-pagination",
    },
});





