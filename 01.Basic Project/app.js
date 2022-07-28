import page from "./node_modules/page/page.mjs"
import { renderHome } from "./views/home.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"
import { renderMiddleWare } from "./middleware.js"
import { renderLogin } from "./views/login.js";
import { renderRegister } from "./views/register.js";
import { authMiddleWare } from "./authservices/auth.js";


page(renderMiddleWare);
page(authMiddleWare)

page(`/`, renderHome);
page(`/login`, renderLogin);
page(`/register`, renderRegister)
page.start()