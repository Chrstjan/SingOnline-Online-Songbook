import { landingView } from "./landing.js";
import { pageNavigation } from "./other/pageNavigation.js";

export const initPage = () => {
  landingView();
  pageNavigation();
};

export const clearApp = (container) => {
  container.innerHTML = "";
};
