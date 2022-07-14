import { contactTemplate } from "./cardTemplate.js"
import { html } from "../../node_modules/lit-html/lit-html.js"
export const contactDivTemplate = (contacts) => html`
<div class="contact-list" style="display: flex; justify-content : space-around">
    ${contacts.map(x => contactTemplate(x))}
</div>`