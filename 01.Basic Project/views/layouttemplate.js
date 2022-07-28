import { render, html } from "../node_modules/lit-html/lit-html.js";
import { naviGationTemplate } from "./navigationView.js";


export const layoutTemplate = (pageContent) => html`
<nav>
    ${naviGationTemplate()}
</nav>
<main>
    ${pageContent}
</main>
`

export const layoutView = () => {


}
