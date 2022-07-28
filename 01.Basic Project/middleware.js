import { render } from "./node_modules/lit-html/lit-html.js"
import { layoutTemplate } from "./views/layouttemplate.js";
const root = document.getElementById(`root`);

const rend = (templateResult) => render(layoutTemplate(templateResult), root);
export const renderMiddleWare = (ctx, next) => {
    ctx.render = rend;
    next();
}