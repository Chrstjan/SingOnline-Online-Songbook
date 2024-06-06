const burgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".main-nav-menu");

let isOpen = false;

export const toggleNavbar = () => {
    burgerBtn.addEventListener("click", () => {
        isOpen = true
        navMenu.classList.toggle("show-menu");

        document.querySelectorAll(".bar").forEach((bar, index) => {
            switch (isOpen) {
                case index === 0:
                    bar.classList.toggle("burger-top");
                    break;
                case index === 1:
                    bar.classList.toggle("burger-middle");
                    break;
                case index === 2:
                    bar.classList.toggle("burger-bottom");
                    break;
                default:
                    console.error("Index not found!");
                    break;
            }
        })
    });
}