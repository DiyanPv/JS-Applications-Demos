import page from "../node_modules/page/page.mjs"
import { logout } from "../views/logout.js";
import { layoutTemplate } from "../views/layouttemplate.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { rend } from "../middleware.js";
export function logoutFunc(ctx) {
    logout();
    console.log(ctx)
   ctx.page.redirect(`/`)

}