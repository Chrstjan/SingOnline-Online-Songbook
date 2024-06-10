import { recievedAllSongTitles } from "../Utils/supabaseApi.js";
import { landingView } from './landing/landing.js';
import { pageNavigation } from "./other/pageNavigation.js";

export const initPage = () => {
  landingView();
  pageNavigation();
  recievedAllSongTitles();
};

export const clearApp = (container) => {
  container.innerHTML = "";
};
