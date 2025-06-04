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
const fullText2 = "The Swift Edge 14 AI is Acer’s brand-new ultralight laptop for 2025 and is perfect for users who crave maximum productivity on the go. This versatile AI laptop is suitable for working from home, hybrid work settings, or downtime, letting users easily achieve a work-life balance. With added features to protect against virtual attacks, this durable and secure laptop keeps data safe when connecting to public Wi-Fi."
const words2 = fullText2.split(" ");
const fullText3 = "It’s that time of year again, the season of…COMPUTEX! Whether you’re a seasoned computer expo vet, or a newbie bound for the green shores of Formosa to visit COMPUTEX 2025, you’re in the right place. Asia’s leading exhibition of AIoT and startups is back, and ready to showcase the latest, greatest technological innovations from all over the globe. This year’s expo will have 1,400 exhibitors from 29 countries or regions, and is going to be bigger and better than ever. COMPUTEX 2025 will focus on the latest tech trends: AI & Robotics, Next-Gen Tech, and Future Mobility. "
const words3 = fullText3.split(" ");
const fullText4 = "Google Chromebooks are user-friendly laptops that are designed for going online. Chromebooks are suitable for light use and encourage users to save documents to the Cloud  rather than the device itself. Instead of including a bunch of fancy features, Chromebooks offer a slimmed-down set of functions and capabilities. Google Chromebooks use the Chrome OS, a Linux-based operating system previously used by  computer enthusiasts. Chromebooks are optimized for streamlined web-based usage, allowing users to browse the web, work on Google Docs, watch videos, and send emails without being bogged down with unnecessary files and apps. "
const words4 = fullText4.split(" ");
const fullText5 = "Windows devices will display a lock screen when left unattended, requiring a password or biometric input to activate for additional security. If you want to add a personal touch to your computer, consider changing the lock screen background to a family photo or a holiday snap. Otherwise, Windows 11 devices may automatically select lock screen advertisements, including banner alerts and news updates. As the Windows 11 lock screen is fully customizable, you can also choose so-called widgets that may be of interest, such as local traffic information. Moreover, the Weather and more app shows dynamic, real-time updates on weather conditions, finance, and sports. These Windows lock screen widgets provide useful information at a glance, offering tailored content to boost the user experience.  "
const words5 = fullText5.split(" ");
const backToTopBtn = document.querySelector(".backToTopBtn");
const supportBtn = document.querySelector(".support-btn");
const supportItems = document.querySelector(".support-items");
const resourcesBtn = document.querySelector(".rescorces-btn");
const resourcesItems = document.querySelector(".rescorces-items");


headerMobileMenu.addEventListener("click", function () {
    headerMobileLine1.style.rotate = "45deg";
    headerMobileLine2.style.display = "none";
    headerMobileLine3.style.rotate = "135deg";
    headerMobileLine3.style.position = "absolute";
    headerMobileLine3.style.top = "16px";
    sideMenu.classList.toggle("hide");
    sideMenu.style.transition = "all 0.3s ease-out";
    headerMobileMenu.addEventListener("click", function () {
        // sideMenu.classList.add("hide");
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
    const pixelsPerStep = 300;

    let wordCount = baseWordCount;

    if (width > baseWidth) {
        const steps = Math.floor((width - baseWidth) / pixelsPerStep);
        wordCount += steps * wordsPerStep;
    }

    wordCount = Math.min(words.length, wordCount);

    const visibleWords = words.slice(0, wordCount).join(" ");
    document.getElementById("responsive-text").textContent = visibleWords;
    document.getElementById("responsive-text2").textContent = visibleWords;
    document.getElementById("responsive-text3").textContent = visibleWords;
    document.getElementById("responsive-text4").textContent = visibleWords;
    document.getElementById("responsive-text5").textContent = visibleWords;
}

window.addEventListener("load", updateResponsiveText);
window.addEventListener("resize", updateResponsiveText);

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const buttons = document.querySelectorAll('.products-btn');
const dropdowns = document.querySelectorAll('.products-items');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const clickedDropdown = dropdowns[index];
        const arrowIcon = btn.querySelector('.arrow-icon');
        const isOpen = clickedDropdown.classList.contains('show');

        // بستن همه dropdownها و حذف چرخش همه فلش‌ها
        dropdowns.forEach(drop => drop.classList.remove('show'));
        document.querySelectorAll('.arrow-icon').forEach(icon => icon.classList.remove('rotate'));

        // اگه باز نبود، بازش کن و فلش بچرخون
        if (!isOpen) {
            clickedDropdown.classList.add('show');
            arrowIcon.classList.add('rotate');

            // اسکرول کردن تا پایین dropdown باز شده
            setTimeout(() => {
                clickedDropdown.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            }, 300); // صبر کن تا transition باز شدن تموم شه
        }
    });
});



const productsTrigger = document.querySelector('.side-menu-box:nth-child(4) .side-menu-item');
const productsSubMenu = document.querySelector('.products-side-menu');
const acerBrandsSubMenu = document.querySelector('.acer-brands-menu');


const productsBack = document.querySelector('.products-side-menu-title .side-menu-item');

productsTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    productsSubMenu.classList.remove('hide');
    productsSubMenu.classList.add('show');
    document.querySelector('.side-menu').classList.add('hide');
});

productsBack.addEventListener('click', function (e) {
    e.preventDefault();
    productsSubMenu.classList.remove('show');
    productsSubMenu.classList.add('hide');
    document.querySelector('.side-menu').classList.remove('hide');
});


