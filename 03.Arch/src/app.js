import { request } from "./api.js";
import { login, logout, register } from "./users.js"
import { router } from "./router.js"
window.api = {
    request, login, logout, register
}
document.querySelector(`#navbarResponsive`).addEventListener(`click`, (e) => {
    e.preventDefault()
    if (e.target.tagName == `A`) {
        let href = new URL(e.target.href)
        console.log(href);
        let view = router[href.pathname]
        view()
    }
})
