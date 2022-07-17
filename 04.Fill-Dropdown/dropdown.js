import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { selectTemplate } from "./template.js";
const url = `http://localhost:3030/jsonstore/advanced/dropdown`
const selectmenu = document.getElementById(`menu`);
async function getOptions() {
    const result = await fetch(url);
    return await result.json()
}
const optionsResult = await getOptions()
const options = Object.values(optionsResult)
function update(options) {
    const result = selectTemplate(options);
    render(result, selectmenu)
}
update(options)
console.log(options);
// POST functionality


document.querySelector(`form`).addEventListener(`submit`, async (e) => {
    e.preventDefault()
    let town = document.querySelector(`#itemText`);
    const optfetch = {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: town.value })
    }


    let result = await fetch(url, optfetch);
    let data = await result.json()
    town.value = ``
    location.reload()
})