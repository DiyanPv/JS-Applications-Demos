import { renderHome } from "./homescreen.js";
import { renderLogin } from "./login.js"
import { rendeRegister } from "./register.js";
import { renderNewRecipe } from "./create.js";
import { render404 } from "./404.js";
import { logout } from "./auth.js";
const loginSection = document.querySelector(`.login`);
const main = document.querySelector(`.main-content`)
const routes = {
    "/": renderHome,
    "/login": renderLogin,
    "/create": renderNewRecipe,
    "/register": rendeRegister,
    "/logout": logout
}
export function router(path) {
    for (const section of main.children) {
        section.style.display = `none`
    }
    const renderer = routes[path] || render404;
    renderer();
}