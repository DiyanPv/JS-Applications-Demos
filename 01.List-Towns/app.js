import { html, render } from "../../node_modules/lit-html/lit-html.js"
const root = document.querySelector(`#root`);
const input = document.querySelector(`#towns`);
const listTemplate = (data) => html`<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>`


document.querySelector(`#btnLoadTowns`).addEventListener(`click`, (e) => {
    e.preventDefault();
    if (input.value != '') {
        let inputTowns = input.value.split(`, `);
        const result = listTemplate(inputTowns);
        render(result, root)
    }
})