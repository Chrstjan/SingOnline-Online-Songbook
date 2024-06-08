import { clearApp } from "./app.js";
import { buildSongDetails } from "./buildSongDetails.js";

const app = document.getElementById("app");
const artistContainer = document.createElement("div");
artistContainer.classList.add("artist-container");

const dummyAlbumsArr = [
  {
    image: "./assets/img/ginger-man.jpg",
    album_name: "Joe & the Banjos",
    album_description: "Joe rocks the world with his banjo",
    songs_in_track: [
      {
        song_name: "Summer Banjo",
        song_name: "Shape of my banjo",
      },
    ],
  },
  {
    image: "./assets/img/ginger-man.jpg",
    album_name: "Joe & the Banjos",
    album_description: "Joe rocks the world with his banjo",
    songs_in_track: [
      {
        song_name: "Summer Banjo",
        song_name: "Shape of my banjo",
      },
    ],
  },
  {
    image: "./assets/img/ginger-man.jpg",
    album_name: "Joe & the Banjos",
    album_description: "Joe rocks the world with his banjo",
    songs_in_track: [
      {
        song_name: "Summer Banjo",
        song_name: "Shape of my banjo",
      },
    ],
  },
  {
    image: "./assets/img/ginger-man.jpg",
    album_name: "Joe & the Banjos",
    album_description: "Joe rocks the world with his banjo",
    song_in_track: "Shape of my banjo",
  },
];

export const buildArtistView = () => {
  clearApp(app);
  clearApp(artistContainer);

  let artistHeader = ``;
  artistContainer.innerHTML += artistHeader;

  let artistContainerContent = `
        <figure class="artist-info-container">
            <header class="artist-header">
                <h3>Artist: Banjo Joe</h3>
            </header>
            <img src="./assets/img/ginger-man.jpg" alt="Picture of the artist" />
            <header class="desktop-artist-header">
                <h3>Banjo Joe</h3>
            </header>
            <figcaption>
                <p>
                    Banjo Joe is a charismatic and talented musician known for his mastery of the banjo. 
                </p>
            </figcaption>
        </figure>`;

  artistContainer.innerHTML += artistContainerContent;

  let artistAlbums = document.createElement("span");
  artistAlbums.classList.add("albums-container");

  let albumsHeader = `
        <header class="album-header">
            <h2>Albums:</h2>
        </header>`;

  artistAlbums.innerHTML += albumsHeader;

  dummyAlbumsArr.map((album) => {
    let albums = `
        <figure class="albums-container-figure">
            <header class="album-header-info">
                <img src="${album.image}" alt="Album image" />
                <hgroup>
                    <h3>${album.album_name}</h3>
                    <h4>${album.album_description}</h4>
                </hgroup>
            </header>
            <figcaption>
               <header class="tracks-header">
                <h2>Tracks: </h2>
               </header> 
               <ul class="album-tracks">
                <li><button class="album-song">Shape of my banjo</button></li>
                <li><button class="album-song">Banjo Summer</button></li>
                <li><button class="album-song">If you leave my banjo</button></li>
               </ul>
            </figcaption>
        </figure>`;

    artistAlbums.innerHTML += albums;

    console.log(dummyAlbumsArr.songs_in_track);
  });

  artistContainer.appendChild(artistAlbums);
  app.appendChild(artistContainer);

  const songsBtn = document.querySelectorAll(".album-song");
  songsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      buildSongDetails();
    });
  });
};
