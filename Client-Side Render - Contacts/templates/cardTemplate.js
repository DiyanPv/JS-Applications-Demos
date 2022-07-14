import { html } from "../../node_modules/lit-html/lit-html.js"
export const contactTemplate = (contact) => html`
<div class="card" style="width: 18rem;">
    <img src="https://imgs.search.brave.com/zQkhRiaGY2M3W2072jO1adIHxeaWEUugCPuTZVv9F_I/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8y/MDBmZTFfMDZjZTEz/OTQ1MWI2NDMzZDk1/MzQyNTg3ZDQ1NDJj/MDEucG5n"
        class="card-img-top" alt="Contact">
    <div class="card-body">
        <h5 class="card-title">${contact.person}</h5>
        <p class="card-text">Phone: ${contact.phone}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
`