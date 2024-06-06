const burgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".main-nav-menu");

export const toggleNavbar = () => {
    burgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
}