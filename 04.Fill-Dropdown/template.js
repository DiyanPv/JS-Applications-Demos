import { render, html } from "../../node_modules/lit-html/lit-html.js";
export const selectTemplate = (data) => html`
${data.map(el => html`<option value=${el._id}>${el.text}</option>`)}
`