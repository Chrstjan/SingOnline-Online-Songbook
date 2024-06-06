import { clearApp } from "./app.js";

const app = document.getElementById("app");

export const landingView = () => {
    clearApp(app);

    let landingContainer = `
        <div class="landing-container">
            <header>
                <h2>SingOnline</h2>
                <p>The best songs in the world</p>
            </header>
            <span class="landing-content">
                <p>
                 Learn your favorite 
                 or discover new songs from artists
                 from all around the world
                </p>

                <footer class="btn-footer">
                    <button class="get-started-btn">Get Started</button>
                </footer>
            </span>
        </div>`;

        app.innerHTML += landingContainer;

        const getStartedBtn = document.querySelector(".get-started-btn");

        getStartedBtn.addEventListener("click", () => {
            
        })
}
