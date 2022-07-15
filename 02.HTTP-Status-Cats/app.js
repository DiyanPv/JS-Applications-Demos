import { render } from "../../node_modules/lit-html/lit-html.js";
import { cardTemplate } from "./cardTemplate.js";
import { cats } from "./catSeeder.js";
cats.forEach(c => c.info = false);
const section = document.getElementById(`allCats`);
window.addEventListener(`load`, (e) => {
    update();

})




function update() {
    const result = cardTemplate(cats);
    render(result, section)
    section.querySelectorAll(`.showBtn`).forEach(button => button.addEventListener(`click`, (e) => {
        const elementId = e.target.parentNode.querySelector(`.status`).id;
        const element = e.target.parentNode.querySelector(`.status`)
        const cat = cats.find(c => c.id == elementId);
        cat.info = !cat.info;
        if (cat.info) {
            element.style.display = `block`
            e.target.innerText = `Hide status code`
        } else {
            element.style.display = `none`
            e.target.innerText = `Show status code`

        }
    }))
}
