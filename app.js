var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    var testimonials = document.getElementsByClassName("testimonial");
    if (n > testimonials.length) {slideIndex = 1}
    if (n < 1) {slideIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonials[slideIndex-1].style.display = "block";
}