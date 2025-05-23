const headerMobileMenu = document.querySelector(".header-moblie-menu");
const headerMobileLine1 = document.querySelector(".header-mobile-line-1");
const headerMobileLine2 = document.querySelector(".header-mobile-line-2");
const headerMobileLine3 = document.querySelector(".header-mobile-line-3");
const sideMenu = document.querySelector(".side-menu");
const firstSliderImg = document.querySelector(".first-slider-img");
const imgBtn1 = document.querySelector(".img-button-1");
const imgBtn2 = document.querySelector(".img-button-2");
const imgBtn3 = document.querySelector(".img-button-3");
const imgBtn4 = document.querySelector(".img-button-4");
const imgBtn5 = document.querySelector(".img-button-5");
const sliders1 = document.querySelector(".sliders-1");
const sliders2 = document.querySelector(".sliders-2");
const slider2 = document.querySelector(".slider-2")
const slider3 = document.querySelector(".slider-3")
const slider4 = document.querySelector(".slider-4")
const slider5 = document.querySelector(".slider-5")


headerMobileMenu.addEventListener("click", function () {
    headerMobileLine1.style.rotate = "45deg";
    headerMobileLine2.style.display = "none";
    headerMobileLine3.style.rotate = "135deg";
    headerMobileLine3.style.position = "absolute";
    headerMobileLine3.style.top = "16px";
    sideMenu.classList.remove("hide");
    sideMenu.style.transition = "all 0.3s ease-out";
    headerMobileMenu.addEventListener("click", function () {
        sideMenu.classList.add("hide");
        headerMobileLine1.style.rotate = "0deg";
        headerMobileLine2.style.display = "block";
        headerMobileLine3.style.rotate = "0deg";
        headerMobileLine3.style.position = "relative";
        headerMobileLine3.style.top = "0";
    });
});

imgBtn1.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/Computex2025-AGW-Home-Banner-Acer-1_Primary-Hero-S.avif");
    // sliders1.style.display = "block";
    sliders2.style.display = "none";
})

imgBtn2.addEventListener("click", function () {
    slider2.classList.remove("hide");
    firstSliderImg.setAttribute("src", "./image/WK22-MemorialDay-2025_Primary-Hero-S.jpg");
    sliders1.style.display = "none";
    // sliders2.style.display = "block";
    sliders2.classList.remove("hide");
});

imgBtn3.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/acer-laptop-swift-14-ai-amd-hero-banner-sf14-61_Primary-Hero-S.avif");
    slider3.classList.remove("hide");
    sliders1.style.display = "none";
    sliders2.style.display = "none";
});

imgBtn4.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/swift-go-16-agw-banner_1_Primary-Hero-S.avif");
    slider4.classList.remove("hide");
    sliders1.style.display = "none";
    slider3.style.display = "none";
});

imgBtn5.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/Acer-TravelMate-P6-14-AI-tmp614-54-Banner_Primary-Hero-S.avif");
    slider5.classList.remove("hide");
    sliders1.style.display = "none";
    slider3.style.display = "none";
    slider4.classList.add("remove");
});