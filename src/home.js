import HomeContent from "./data/home.json"

const imageURLs = (function importSlideShowImages() {
    const requireContext = require.context("./images/slideshow", false, /^\.\/.*\.jpe?g$/);
    return requireContext.keys().map(requireContext);
})();


function createHome() {
    const greeting = document.createElement("h2");
    greeting.textContent = HomeContent.de.greeting;

    const description = document.createElement("p");
    description.textContent = HomeContent.de["short-description"];

    const slideShow = createSlideShow();
    
    const home = document.createElement("div");
    home.classList.add("home");
    home.append(greeting, description, slideShow);
    return home;
}

function createSlideShow() {
    const slides = imageURLs.map((url) => {
        const slide = document.createElement("img");
        slide.src = url;
        slide.classList.add("slide");
        return slide;
    });

    const slider = ((slides) => {
        let currentSlide = 0;
        const slideCount = slides.length;
        slides.forEach( (slide, index) => index === 0 ? slide.style.display = "block" : slide.style.display = "none");

        const displaySlide = (index) => {
            slides[currentSlide].style.display = "none";
            currentSlide = (((currentSlide + index) % slideCount) + slideCount) % slideCount;
            slides[currentSlide].style.display = "block";
        } 
    
        const next = () => displaySlide(1);
        const prev = () => displaySlide(-1);
        return {
            next,
            prev
        }
    })(slides);

    const prev = document.createElement("button");
    prev.innerHTML = "&#10094;";
    prev.classList.add("prev");
    prev.addEventListener("click", slider.prev);

    const next = document.createElement("button");
    next.innerHTML = "&#10095;";
    next.classList.add("next");
    next.addEventListener("click", slider.next);

    const slideShow = document.createElement("div");
    slideShow.classList.add("slide-show");
    slideShow.append(...slides, prev, next);
    return slideShow;
}

export { createHome };