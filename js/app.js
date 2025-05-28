const headerMobileMenu = document.querySelector(".header-moblie-menu");
const headerMobileLine1 = document.querySelector(".header-mobile-line-1");
const headerMobileLine2 = document.querySelector(".header-mobile-line-2");
const headerMobileLine3 = document.querySelector(".header-mobile-line-3");
const sideMenu = document.querySelector(".side-menu");
const firstSliderImg = document.querySelector(".first-slider-img");
const firstSliderImgMd = document.querySelector(".first-slider-img-md");
const imgBtn1 = document.querySelector(".img-button-1");
const imgBtn2 = document.querySelector(".img-button-2");
const imgBtn3 = document.querySelector(".img-button-3");
const imgBtn4 = document.querySelector(".img-button-4");
const imgBtn5 = document.querySelector(".img-button-5");
const pic1TextBox = document.querySelector(".pic-1-text-box");
const pic2TextBox = document.querySelector(".pic-2-text-box");
const pic3TextBox = document.querySelector(".pic-3-text-box");
const pic4TextBox = document.querySelector(".pic-4-text-box");
const pic5TextBox = document.querySelector(".pic-5-text-box");
const width = window.innerWidth;
const slider1Pic1 = document.querySelector(".slider-1-pic1");
const fullText = "Purchasing a laptop to see us through school or college is an important investment.Student laptops witness the highs and lows of student life, helping us to cram information before a big exam, type assignments, or play movies or games during downtime.They must balance value, performance, and dependable battery life to get through a day of classes or intense study sessions.Student laptops must also be durable and withstand being transported around in a bag or rucksack(see our pick of stylish laptop bags here).Here are some of the best budget laptops for college or school."
const words = fullText.split(" ");


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

// if (width <= 374) {
//     slider1Pic1.setAttribute("src", "./image/Computex2025-AGW-Home-Banner-Acer-1_Primary-Hero-S.avif")
// }
// if (width >= 375) {
//     slider1Pic1.setAttribute("src", "./image/Computex2025-AGW-Home-Banner-Acer-1_Primary-Hero-M2.avif")
// } else if (width >= 678) {
//     slider1Pic1.setAttribute("src", "./image/Computex2025-AGW-Home-Banner-Acer-1_Primary-Hero-M1.avif")
// }

imgBtn1.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/Computex2025-AGW-Home-Banner-Acer-1_Primary-Hero-S.avif");
    pic1TextBox.classList.remove("hide");
    pic2TextBox.classList.add("hide");
    pic3TextBox.classList.add("hide");
    pic4TextBox.classList.add("hide");
    pic5TextBox.classList.add("hide");
});


if (width >= 425) {
    imgBtn2.addEventListener("click", function () {
        // if (425 <= width <= 767) {
        //     slider1Pic1Md.classList.remove("hide");
        // } else {
        //     slider1Pic1Md.classList.add("hide");
        // }
        // if (320 <= width <= 425) {
        //     firstSliderImg.setAttribute("src", "./image/swift-edge-14-ai-agw-banner_Primary-Hero-M2.avif");
        // } else if (426 <= width <= 767) {
        //     firstSliderImg.setAttribute("src", "./image/swift-go-16-agw-banner_1_Primary-Hero-S.avif");
        // }
        firstSliderImg.setAttribute("src", "./image/swift-edge-14-ai-agw-banner_Primary-Hero-M2.avif");
        pic2TextBox.classList.remove("hide");
        pic1TextBox.classList.add("hide");
        pic3TextBox.classList.add("hide");
        pic4TextBox.classList.add("hide");
        pic5TextBox.classList.add("hide");
    });

} else {
    imgBtn2.addEventListener("click", function () {
        // if (425 <= width <= 767) {
        //     slider1Pic1Md.classList.remove("hide");
        // } else {
        //     slider1Pic1Md.classList.add("hide");
        // }
        // if (320 <= width <= 425) {
        //     firstSliderImg.setAttribute("src", "./image/swift-go-16-agw-banner_1_Primary-Hero-S.avif");
        // } else if (426 <= width <= 767) {
        //     firstSliderImg.setAttribute("src", "./image/swift-go-16-agw-banner_1_Primary-Hero-S.avif");
        // }
        firstSliderImg.setAttribute("src", "./image/swift-go-16-agw-banner_1_Primary-Hero-S.avif");
        pic2TextBox.classList.remove("hide");
        pic1TextBox.classList.add("hide");
        pic3TextBox.classList.add("hide");
        pic4TextBox.classList.add("hide");
        pic5TextBox.classList.add("hide");
    });
}


imgBtn3.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/HOMEPAGE_2900x1087-4_Primary-Hero-S.avif");
    pic3TextBox.classList.remove("hide");
    pic1TextBox.classList.add("hide");
    pic2TextBox.classList.add("hide");
    pic4TextBox.classList.add("hide");
    pic5TextBox.classList.add("hide");
});

imgBtn4.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/acer-laptop-swift-14-ai-amd-hero-banner-sf14-61_Primary-Hero-S.avif");
    pic4TextBox.classList.remove("hide");
    pic3TextBox.classList.add("hide");
    pic1TextBox.classList.add("hide");
    pic2TextBox.classList.add("hide");
    pic5TextBox.classList.add("hide");
});

imgBtn5.addEventListener("click", function () {
    firstSliderImg.setAttribute("src", "./image/Acer-TravelMate-P6-14-AI-tmp614-54-Banner_Primary-Hero-S.avif");
    pic5TextBox.classList.remove("hide");
    pic4TextBox.classList.add("hide");
    pic3TextBox.classList.add("hide");
    pic1TextBox.classList.add("hide");
    pic2TextBox.classList.add("hide");
});

function updateResponsiveText() {
    const width = window.innerWidth;
    const baseWidth = 320;
    const baseWordCount = 14;
    const wordsPerStep = 5;
    const pixelsPerStep = 65;

    let wordCount = baseWordCount;

    if (width > baseWidth) {
        const steps = Math.floor((width - baseWidth) / pixelsPerStep);
        wordCount += steps * wordsPerStep;
    }

    wordCount = Math.min(words.length, wordCount); // جلوگیری از اضافه شدن بیش از حد

    const visibleWords = words.slice(0, wordCount).join(" ");
    document.getElementById("responsive-text").textContent = visibleWords;
}

window.addEventListener("load", updateResponsiveText);
window.addEventListener("resize", updateResponsiveText);