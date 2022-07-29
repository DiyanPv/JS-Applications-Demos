import { render, html } from "./node_modules/lit-html/lit-html.js"
import { layoutTemplate } from "./views/layouttemplate.js";
import { naviGationTemplate } from "./views/navigationView.js";
const root = document.getElementById(`root`);

export const rend = (ctx, templateResult) => {
    let layout = html`
    <nav>
        ${naviGationTemplate(ctx.isAuth)}
    </nav>
    <main>
        ${templateResult}
    </main>
    `
    render(layout, root);
}
export const renderMiddleWare = (ctx, next) => {
    ctx.render = rend.bind(null, ctx);
    next();
}