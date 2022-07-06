const homePage = document.getElementById(`home-page`)
const toHide = document.querySelectorAll(`.view-section`);
const addMovieBtn = document.getElementById(`add-movie-button`);
const movies = document.getElementById(`movie`);
const catalogue = movies.querySelector(`.card-deck`)
function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function homePageRend() {
    hideAll()
    homePage.style.display = `block`
    addMovieBtn.style.display = `block`
    movies.style.display = `block`
    getMovies()
}

function createMovie(movie) {
    const element = document.createElement(`div`);
    element.classList.add("card");
    element.innerHTML = ` <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a data-id = "${movie._id}" href="/details/${movie._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>`;

    return element

}

async function getMovies() {
    const res = await fetch(`http://localhost:3030/data/movies`);
    const data = await res.json();
    data.forEach(el => catalogue.appendChild(createMovie(el)));
}

