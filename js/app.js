const headerMobileMenu = document.querySelector(".header-moblie-menu");
const headerMobileLine1 = document.querySelector(".header-mobile-line-1");
const headerMobileLine2 = document.querySelector(".header-mobile-line-2");
const headerMobileLine3 = document.querySelector(".header-mobile-line-3");
const sideMenu = document.querySelector(".side-menu");

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


window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const captions = document.querySelectorAll(".caption");
    const toggleBtn = document.getElementById("toggleSlider");
    let index = 1;
    let currentSize = "";
    let interval;
    isPaused = false;

    function getSizeCategory() {
        const width = window.innerWidth;
        if (width < 768) return "mobile";
        if (width < 1200) return "laptop";
        return "desktop";
    }

    function updateSlider() {
        currentSize = getSizeCategory();

        slides.forEach((img, i) => {
            const src = `image/${currentSize}${index}.avif`;
            img.setAttribute("src", src);
        });

        captions.forEach(caption => {
            caption.style.display = "none";
        });

        const activeCaption = document.querySelector(`.caption.pic-${index}-text-box`);
        if (activeCaption) {
            activeCaption.style.display = "block";
        }
    }


    toggleBtn.addEventListener("click", () => {
        const playIcon = toggleBtn.querySelector(".play-icon");
        const pauseIcon = toggleBtn.querySelector(".pause-icon");

        if (isPaused) {
            startSlider();
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline";
        } else {
            stopSlider();
            playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
        }

        isPaused = !isPaused;
    });


    function startSlider() {
        updateSlider();
        setInterval(() => {
            index = (index % 5) + 1;
            updateSlider();
        }, 7000);
    }
    function stopSlider() {
        clearInterval(interval);
    }

    startSlider();


    window.addEventListener("resize", () => {
        updateSlider();
    });
});


window.addEventListener('resize', () => {
    const newSize = getSizeCategory();
    if (newSize !== currentSize) {
        index = 1;
        updateImage();
    }
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

        dropdowns.forEach(drop => drop.classList.remove('show'));
        document.querySelectorAll('.arrow-icon').forEach(icon => icon.classList.remove('rotate'));

        if (!isOpen) {
            clickedDropdown.classList.add('show');
            arrowIcon.classList.add('rotate');

            setTimeout(() => {
                clickedDropdown.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            }, 300);
        }
    });
});



const productsTrigger = document.querySelector('.side-menu-box:nth-child(4) .side-menu-item');
const productsTrigger2 = document.querySelector('.side-menu-box:nth-child(8) .side-menu-item');
const productsTrigger3 = document.querySelector('.side-menu-box:nth-child(9) .side-menu-item');
const productsSubMenu = document.querySelector('.products-side-menu');
const acerBrandsSubMenu = document.querySelector('.acer-brands-menu');
const acerIdSubMenu = document.querySelector('.acerId-side-menu');



const productsBack = document.querySelector('.products-side-menu-title .side-menu-item');
const productsBack2 = document.querySelector('.acer-brands-menu .side-menu-item');
const productsBack3 = document.querySelector('.acerId-side-menu .side-menu-item');


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

productsTrigger2.addEventListener('click', function (e) {
    e.preventDefault();
    acerBrandsSubMenu.classList.remove('hide');
    acerBrandsSubMenu.classList.add('show');
    document.querySelector('.side-menu').classList.add('hide');
});

productsBack2.addEventListener('click', function (e) {
    e.preventDefault();
    acerBrandsSubMenu.classList.remove('show');
    acerBrandsSubMenu.classList.add('hide');
    document.querySelector('.side-menu').classList.remove('hide');
});

productsTrigger3.addEventListener('click', function (e) {
    e.preventDefault();
    acerIdSubMenu.classList.remove('hide');
    acerIdSubMenu.classList.add('show');
    document.querySelector('.side-menu').classList.add('hide');
});

productsBack3.addEventListener('click', function (e) {
    e.preventDefault();
    acerIdSubMenu.classList.remove('show');
    acerIdSubMenu.classList.add('hide');
    document.querySelector('.side-menu').classList.remove('hide');
});

document.addEventListener("DOMContentLoaded", () => {
    const productsMenu = document.querySelector('.products-side-menu');
    const openMenuBtn = document.querySelector('.side-menu-item');
    const closeBtns = document.querySelectorAll('.products-side-menu-title svg');

    openMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        productsMenu.classList.add('show');
        productsMenu.classList.remove('hide');

        document.body.style.overflow = 'hidden';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            productsMenu.classList.remove('show');
            productsMenu.classList.add('hide');

            document.body.style.overflow = '';
        });
    });
});


