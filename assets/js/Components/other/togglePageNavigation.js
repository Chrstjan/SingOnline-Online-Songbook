const mainHeader = document.querySelector(".main-header");
const mainFooter = document.querySelector(".main-footer");

export const hideNavigation = () => {
    mainHeader.style.display = "none";
    mainFooter.style.display = "none";
}

export const showNavigation = () => {
    mainHeader.style.display = "flex";
    mainFooter.style.display = "block";
}