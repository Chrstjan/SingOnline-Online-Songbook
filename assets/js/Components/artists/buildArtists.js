import { clearApp } from "../app.js";
import { buildArtistView } from "./buildArtistView.js";

const app = document.getElementById("app");
const artistsContainer = document.createElement("div");
artistsContainer.classList.add("artists-container");

let dummyArtistsArr = [
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "assets/img/Stolen Images/Telus Music.jpg",
    name: "Telus Music",
  },
  {
    image: "assets/img/Stolen Images/Mac-DeMarco.jpg",
    name: "Mac DeMarco",
  },
  {
    image: "assets/img/Stolen Images/Tame Impala.png",
    name: "Tame Impala",
  },
  {
    image: "assets/img/Stolen Images/Scary Pockets.jpg",
    name: "Scary Pockets",
  },
  {
    image: "assets/img/Stolen Images/Måneskin.jpg",
    name: "Måneskin",
  },
];

export const buildArtists = () => {
  clearApp(app);
  clearApp(artistsContainer);

  let artistsHeader = `
        <header class="artists-header">
            <h2>Artists</h2>
        </header>`;

  app.innerHTML += artistsHeader;

  dummyArtistsArr.map((artist) => {
    let artistContainer = `
            <figure class="artist-container">
                <img src="${artist.image}"
                <header class="artist-name">
                    <h3>${artist.name}</h3>
                </header>
            </figure>`;

    artistsContainer.innerHTML += artistContainer;
  });

  app.appendChild(artistsContainer);

  const artistFigure = document.querySelectorAll(".artist-container");
  artistFigure.forEach((figure) => {
    figure.addEventListener("click", () => {
      buildArtistView();
    });
  });
};
