import { clearApp } from "../app.js";
import { buildArtistView } from "../artists/buildArtistView.js";
import { buildSongDetails } from "./buildSongDetails.js";

const app = document.getElementById("app");
const songContainer = document.createElement("div");
songContainer.classList.add("song-container");

//Dummy data for search results (only for visualization)
let dummySearchResult = [
  {
    song_name: "Song One",
    artist_name: "Banjo Joe",
  },
  {
    song_name: "Song Two",
    artist_name: "Banjo Joe",
  },
  {
    song_name: "Song Three",
    artist_name: "Banjo Joe",
  },
  {
    song_name: "Song Four",
    artist_name: "Banjo Joe",
  },
];

export const buildSearchResult = () => {
  clearApp(app);
  clearApp(songContainer);

  let searchContainer = `
    <div class="search-container">
      <span class="search-bar-container">
        <input class="song-search-bar" type="text" placeholder="Search" />
        <header>
            <h4>Songs</h4>
            <p>Search for your favorite songs or discover new</p>
        </header>
      </span>
    </div>`;

  let serachResultContainer = document.createElement("div");
  serachResultContainer.classList.add("search-result-container");

  let searchResultHeader = `
            <header>
                <h3>Found X Songs</h3>
            </header>`;

  serachResultContainer.innerHTML += searchResultHeader;

  dummySearchResult.map((song) => {
    let searchedSong = `
        <figure class="searched-song">
            <header>
                <img class="image-song" src="./assets/img/ginger-man.jpg" alt="searched song image" />
                <hgroup>
                  <h3>${song.song_name}</h3>
                  <h4>${song.artist_name}</h4>
                </hgroup>
            </header>
            <figcaption class="star-btn-container">
                <button class="song-star">&#9733;</button>
                <span class="album-container">
                    <img class="album-image" src="./assets/img/ginger-man.jpg" alt="searched song album image" />
                    <h4 class="album-name">Album Name</h4>
                </span>
            </figcaption>
        </figure>`;

    serachResultContainer.innerHTML += searchedSong;
  });

  songContainer.innerHTML += searchContainer;
  songContainer.appendChild(serachResultContainer);
  app.appendChild(songContainer);

  const imageSong = document.querySelectorAll(".image-song");
  imageSong.forEach((img) => {
    img.addEventListener("click", () => {
      buildSongDetails();
    });
  });

  const albumImages = document.querySelectorAll(".album-image");
  albumImages.forEach((album) => {
    album.addEventListener("click", () => {
      buildArtistView();
    })
  });

  const albumName = document.querySelectorAll(".album-name");
  albumName.forEach((album) => {
    album.addEventListener("click", () => {
      buildArtistView();
    })
  })
};
