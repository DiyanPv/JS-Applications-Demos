import { html } from "../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/api.js";
import { isAuthenticated } from "../authservices/auth.js";
const homeTemplate = (movies) => html`
<h1 id="pageTitle">Movie List</h1>
<div class="movie-list">
    ${movies.map(x => cardTemplate(x))}
</div>`


export const renderHome = (ctx) => {
    getAll().then(movie => Object.values(movie)).then(x => ctx.render(homeTemplate(x)));
}

const cardTemplate = (movie) => html`<div class="card" style="width: 100pxrem;">
    <img src="${movie.Poster}" class="card-img-top" alt="No Img" height="270px">
    <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-year" height="100px">Year ${movie.Year}</p>
        <a href="${movie.Title}" class="btn btn-primary">Details</a>
    </div>
</div>`

