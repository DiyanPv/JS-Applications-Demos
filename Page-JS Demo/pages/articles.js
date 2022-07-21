
const root = document.getElementById(`root`);
import { html } from "../node_modules/lit-html/lit-html.js";

const getArticles = () => fetch(`http://localhost:3030/jsonstore/articles`).then(res => res.json()).then(data => Object.values(data))


export const articleTemplate = (articles,) => `
<h1>Articles</h1>
${articles.map(x => {
    return `
    <article>
<h4>${x.title}</h4>
<footer>
<p>Author: ${x.author}</p>
<p>${x.content}</p>
</footer>
</article>
`


}).join(`<hr>`)}
`



export const renderArticles = async (ctx) => {
    const res = await getArticles();
    root.innerHTML = articleTemplate(res)
}