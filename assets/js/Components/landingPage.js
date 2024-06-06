import { clearApp } from '../Components/app.js';

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
                <img src="./assets/img/ginger-man.jpg" alt="featured song image" />
                <header class="featured-header">
                    <hgroup>
                        <h3>Song Name</h3>
                        <h4>Artist Name</h4>
                    </hgroup>
                    <button class="song-star">&#9733;</button>
                </header>
            </figure>
        </span>`;

        app.innerHTML += featuredSong;
}

export const buildPopularSongs = () => {
    clearApp(popSongsContainer);

    let containerHeader = `<header><h3>Popular Songs</h3></header>`

    let popularSongs = `
        <span class="songs-container">
            <figure class="popular-song">
                <img src="./assets/img/ginger-man.jpg" alt="song picture"/>
                <header>
                    <h3>Song Name</h3>
                    <h4>Song Artist</h4>
                </header>
            </figure>
        </span>`;

        popSongsContainer.innerHTML += containerHeader;
        popSongsContainer.innerHTML += popularSongs;
        app.appendChild(popSongsContainer);
}