import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { naviGationTemplate } from "./navigationView.js";


export const layoutTemplate = (ctx, pageContent) => html`
<nav>
    ${naviGationTemplate(ctx)}
</nav>
<main>
    ${pageContent}
</main>
`

