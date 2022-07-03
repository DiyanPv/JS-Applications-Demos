import { renderHome } from "./homescreen.js";
import { renderLogin } from "./login.js"
import { rendeRegister } from "./register.js";
import { renderNewRecipe } from "./create.js";
const loginSection = document.querySelector(`.login`);
const main = document.querySelector(`.main-content`)
export function router(path) {
    for (const section of main.children) {
        section.style.display = `none`
    }
    if (path == `/`) {
        renderHome();
    } else if (path == `/login`) {
        //render homepage
        renderLogin()
    } else if (path == `/create`) {
        //render homepage
        renderNewRecipe()
    } else if (path == `/register`) {
        //render homepage
        rendeRegister()
    } else if (path == `/logout`) {
        //render homepage
        renderLogin()
    }
}