import { clearApp } from "../app.js";
import { buildSongDetails } from "../songs/buildSongDetails.js";

const app = document.getElementById("app");
const popSongsContainer = document.createElement("div");
popSongsContainer.classList.add("popular-songs-container");

//Only used as dummy data for the map loops in the build code!
let dummyArr = ["Popular Songs", "Rock", "R&B", "Soul"];
let stolenSongs = [
  {
    img: "assets/img/Stolen Images/Arctic Monkeys.jpg",
    name: "Do i wanna know?",
    artist: "Arctic Monkeys"
  },
  {
    img: "assets/img/Stolen Images/Knower.jpg",
    name: "Overtime",
    artist: "Knower"
  },
  {
    img: "assets/img/Stolen Images/Mac-DeMarco.jpg",
    name: "Freaking out the neighborhood",
    artist: "Mac DeMarco"
  },
  {
    img: "assets/img/Stolen Images/Måneskin.jpg",
    name: "For your love",
    artist: "Måneskin"
  },
  {
    img: "assets/img/Stolen Images/Mina Okabe.png",
    name: "Every Second",
    artist: "Mina Okabe"
  },
  {
    img: "assets/img/Stolen Images/popmlamoose.jpg",
    name: "Tainted Love",
    artist: "Pomplamoose"
  },
  {
    img: "assets/img/Stolen Images/Scary Pockets.jpg",
    name: "American Boy",
    artist: "Scary Pockets"
  },
  {
    img: "assets/img/Stolen Images/Tame Impala.png",
    name: "Borderline",
    artist: "Tame Impala"
  },
  {
    img: "assets/img/Stolen Images/Telus Music.jpg",
    name: "Apart",
    artist: "Telus Music"
  }
]

let randFeaturedSong = Math.floor(Math.random() * stolenSongs.length);

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

export const buildPopularSongs = async (featuredSong, songs) => {
  clearApp(popSongsContainer);
  dummyArr.forEach((category) => {
    let containerHeader = `<header><h3>${category}</h3></header>`;
    popSongsContainer.innerHTML += containerHeader;

    let songsContainer = document.createElement("span");
    songsContainer.classList.add("songs-container");

    stolenSongs.forEach((song) => {
      let popularSongs = `
            <figure class="popular-song">
                <img class="song-cards-img" src="${song.img}" alt="song picture"/>
                <header>
                    <h3>${song.name}</h3>
                    <h4>${song.artist}</h4>
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
