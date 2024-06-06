import { landingView } from "./landing.js";

export const initPage = () => {
    landingView();
}

export const clearApp = (container) => {
    container.innerHtml = "";
}