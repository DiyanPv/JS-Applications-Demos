import page from "./node_modules/page/page.mjs"
import * as api from "./api/api.js"
import * as data from "./data.js"
import { dashboardCreate } from "./views/dashboard.js"
import { editPage } from "./views/edit.js"
import { createPage } from "./views/create.js"
import { loginCreate } from "./views/login.js"
import { catalogueCreate } from "./views/myfurniture.js"
import { getFurniture } from "./data.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"
import { registerPage } from "./views/register.js"
import { logoutFunc } from "./views/logout.js"
window.api = api;
window.data = data;

page(`/`, dashboardCreate)
page(`/dashboard`, dashboardCreate)
page(`/create`, createPage)
page(`/edit`, editPage)
page(`/login`, loginCreate)
page(`/my-furniture`, catalogueCreate)
page(`/register`, registerPage)

page.start()


document.getElementById(`logoutBtn`).addEventListener(`click`, logoutFunc)