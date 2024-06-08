import { clearApp } from "../Components/app.js";
import { buildArtistView } from "../Components/buildArtistView.js";

const app = document.getElementById("app");
const artistsContainer = document.createElement("div");
artistsContainer.classList.add("artists-container");

let dummyArtistsArr = [
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
  },
  {
    image: "./assets/img/ginger-man.jpg",
    name: "Banjo Joe",
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
