import { clearApp } from "../Components/app.js";
import { buildSongDetails } from "./buildSongDetails.js";

const app = document.getElementById("app");
const popSongsContainer = document.createElement("div");
popSongsContainer.classList.add("popular-songs-container");

export const buildFeaturedSong = () => {
  clearApp(app);

  let featuredSong = `
        <span class="featured-song-container">
            <header>
                <h2>Featured Song</h2>
            </header>
            <figure class="featured-song">
                <img class="featured-song-img" src="./assets/img/ginger-man.jpg" alt="featured song image" />
                <header class="featured-header">
                    <hgroup>
                        <h3>Song Name</h3>
                        <h4>Artist Name</h4>
                    </hgroup>
                    <button class="song-star">&#9733;</button>
                    <span class="album-container">
                        <img src="./assets/img/ginger-man.jpg" alt="album image" />
                        <h4>Album Name</h4>
                    </span>
                </header>
            </figure>
        </span>`;

  app.innerHTML += featuredSong;

  const featuredBtn = document.querySelector(".featured-song-img");
  featuredBtn.addEventListener("click", () => {
    buildSongDetails();
  });
};

//Only used as dummy data for the map loops in the build code!
let dummyArr = ["Popular Songs", "Rock", "R&B", "Soul"];
let dummySongNames = [
  "Song One",
  "Song Two",
  "Song Three",
  "Song Four",
  "Song Five",
  "Song Six",
  "Song Seven",
  "Song Eight",
  "Song Nine",
];

export const buildPopularSongs = () => {
  clearApp(popSongsContainer);

  dummyArr.map((category) => {
    let containerHeader = `<header><h3>${category}</h3></header>`;
    popSongsContainer.innerHTML += containerHeader;

    let songsContainer = document.createElement("span");
    songsContainer.classList.add("songs-container");

    dummySongNames.map((song) => {
      let popularSongs = `
            <figure class="popular-song">
                <img class="song-cards-img" src="./assets/img/ginger-man.jpg" alt="song picture"/>
                <header>
                    <h3>${song}</h3>
                    <h4>Song Artist</h4>
                </header>
                <figcaption class="song-list-btn-container">
                    <button class="song-star">&#9733;</button>
                </figcaption>
            </figure>`;
      songsContainer.innerHTML += popularSongs;
    });
    popSongsContainer.appendChild(songsContainer);
    app.appendChild(popSongsContainer);

    const songCardsBtn = document.querySelectorAll(".song-cards-img");
    songCardsBtn.forEach((card) => {
      card.addEventListener("click", () => {
        buildSongDetails();
      });
    });
  });
};
