// Carousel Functionality
let slideIndex = 0;

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

// Auto-play functionality
setInterval(() => changeSlide(1), 5000);

// Smooth Scrolling
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Booth Carousel Functionality
let boothSlideIndex = 0;

function showBoothSlide(n) {
    let slides = document.getElementsByClassName("booth-carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    boothSlideIndex = (n + slides.length) % slides.length;
    slides[boothSlideIndex].style.display = "block";
}

function changeBoothSlide(n) {
    showBoothSlide(boothSlideIndex + n);
}

// Auto-play functionality for booth carousel
setInterval(() => changeBoothSlide(1), 5000);

// Smooth Scrolling
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
