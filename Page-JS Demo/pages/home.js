import { html } from "../node_modules/lit-html/lit-html.js"
const root = document.getElementById(`root`)
export const homeTemplate = () => `
<h2>HomePage</h2>
<p>Welcome to my Website</p>
 `;
export const renderHome = (ctx) => {
    root.innerHTML = homeTemplate()
    console.log(root)
}