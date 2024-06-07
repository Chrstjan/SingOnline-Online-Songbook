import { clearApp } from "./app.js";
import { buildSearchResult } from "./buildSearchedSongs.js";

const app = document.getElementById("app");
const songDetailContainer = document.createElement("div");
songDetailContainer.classList.add("song-details-container");

export const buildSongDetails = () => {
    clearApp(app);
    clearApp(songDetailContainer);

    let songInfo = `
        <span class="song-detail-top">
            <div class="dot-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <figure class="song-image-container">
                <img src="./assets/img/ginger-man.jpg" alt="song image" />
                <header>
                    <h2>Song Name</h2>
                    <p class="song-album">Song Album</p>
                    <p class="song-artist">Song Artist</p>
                </header>
                <figcaption class="album-container">
                    <img src="./assets/img/ginger-man.jpg" alt="song album image" />
                    <h3>Album Name</h3>
                </figcaption>
            </figure>
            <div class="song-btns-container">
                <button class="close-song-btn">X</button>
                <button class="song-star">&#9733;</button>
            </div>
        </span>`;

        let songLyrics = `
            <article class="song-lyrics-container">
                <p class="verse-one">
                    (Verse 1)
                    Lorem ipsum dolor sit amet,
                    Consectetur adipiscing elit,
                    Vivamus lacinia odio vitae vestibulum,
                    Nulla facilisi, nulla facilisi.
                </p>
                <p class="chorus">
                    (Chorus)
                    Sed ut perspiciatis unde omnis iste natus,
                    Error sit voluptatem accusantium,
                    Doloremque laudantium, totam rem aperiam,
                    Eaque ipsa quae ab illo inventore.
                </p>
                <p class="verse-two">
                    (Verse 2)
                    Nemo enim ipsam voluptatem,
                    Quia voluptas sit aspernatur,
                    Aut odit aut fugit, sed quia consequuntur,
                    Magni dolores eos qui ratione.
                </p>
            </article>`;

        songDetailContainer.innerHTML += songInfo;
        songDetailContainer.innerHTML += songLyrics;
        app.appendChild(songDetailContainer);

        const closeBtn = document.querySelector(".close-song-btn");
        closeBtn.addEventListener("click", () => {
            buildSearchResult();
        });
}