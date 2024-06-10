import { hideNavigation, showNavigation } from "../other/togglePageNavigation.js";
import { clearApp } from "../app.js";
import { buildFeaturedSong, buildPopularSongs } from "./landingPage.js";

const app = document.getElementById("app");

export const landingView = () => {
    hideNavigation();
    clearApp(app);

    let landingContainer = `
        <div class="landing-container">
            <header>
                <h2>SingOnline</h2>
                <p>The best songs in the world</p>
            </header>
            <span class="landing-content">
                <p>
                 Learn your favorite tunes or discover
                 new songs from talented artists from all 
                 around the world. Dive into a vast musical 
                 journey where genres blend and cultures 
                 collide, bringing you an endless stream of 
                 auditory delights.
                </p>

                <footer class="btn-footer">
                    <button class="get-started-btn">Get Started</button>
                </footer>
            </span>
        </div>`;

        app.innerHTML += landingContainer;

        const getStartedBtn = document.querySelector(".get-started-btn");

        getStartedBtn.addEventListener("click", () => {
            showNavigation();
            buildFeaturedSong();
            buildPopularSongs();
        });
}
