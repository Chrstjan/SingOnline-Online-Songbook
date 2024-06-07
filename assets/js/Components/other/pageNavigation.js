import { buildSearchResult } from "../buildSearchedSongs.js";
import { buildFeaturedSong, buildPopularSongs } from "../landingPage.js";

export const pageNavigation = () => {
  const headerLogoText = document.getElementById("home");
  headerLogoText.addEventListener("click", () => {
    buildFeaturedSong();
    buildPopularSongs();
  })

  const headerHomeBtn = document.getElementById("home-btn");
  headerHomeBtn.addEventListener("click", () => {
    buildFeaturedSong();
    buildPopularSongs();
  });

  const songsBtn = document.getElementById("songs");
  songsBtn.addEventListener("click", () => {
    buildSearchResult();
  });

  const artistsBtn = document.getElementById("artists");
  const loginBtn = document.getElementById("login");

  const footerHomeBtn = document.getElementById("footer-home");
  footerHomeBtn.addEventListener("click", () => {
    buildFeaturedSong();
    buildPopularSongs();
  });

  const footerProfileBtn = document.getElementById("profile");
};
