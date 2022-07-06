import { showLogin } from "./pages/login.js";
import { hideAll } from "./pages/login.js";
import { homePageRend } from "./pages/mainscreen.js";
import { registerPage } from "./pages/register.js";

const router = {
    "/login": showLogin,
    "/": homePageRend,
    "/register": registerPage


}

hideAll()
homePageRend()
document.querySelector(`nav`).addEventListener(`click`, (e) => {
    e.preventDefault();

    if (e.target.tagName == `A` && e.target.classList.length == 1 || e.target.classList[0] == `navbar-brand`) {
        let newUrl = new URL(e.target.href)
        let path = newUrl.pathname;
        let view = router[path];
        view()
    }
})
document.querySelector(`#add-movie-button a`).addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(e.target);
})