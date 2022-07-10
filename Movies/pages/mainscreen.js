const homePage = document.getElementById(`home-page`)
const toHide = document.querySelectorAll(`.view-section`);
const addMovieBtn = document.getElementById(`add-movie-button`);
const movies = document.getElementById(`movie`);
const catalogue = movies.querySelector(`.card-deck`);
const guestItems = document.querySelectorAll(".guest");
const userItems = document.querySelectorAll(`.user`);
const addBtn = addMovieBtn.querySelector(`a`);
const cardArr = document.querySelector(`.card-deck`);
const navlinkEmail = document.querySelector(`#linked`);
let dataTest = ''
function updateNav() {
    const dada = localStorage.getItem(`user`);
    if (dada) {
        const guestarr = Array.from(guestItems)
        const userArr = Array.from(userItems);
        guestItems.forEach(el => el.style.display = `none`);
        userArr.forEach(el => el.style.display = `block`);
        addBtn.style.display = `block`;

        navlinkEmail.innerText = `Welcome ${JSON.parse(dada).username}`

    } else {
        const guestarr = Array.from(guestItems)
        const userArr = Array.from(userItems);
        guestItems.forEach(el => el.style.display = `block`);
        userArr.forEach(el => el.style.display = `none`);
        addBtn.style.display = `none`
    }
}
function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function homePageRend() {
    hideAll();
    updateNav()
    homePage.style.display = `block`;
    addMovieBtn.style.display = `block`;
    movies.style.display = `block`;

    let card = document.querySelectorAll(`.card`)
    let cardArr = Array.from(card);
    // cardArr.forEach(ell => {
    //     let currentCard = ell.querySelector(`.card-body .card-title`);
    //     dataTest.forEach(el => {
    //         console.log(el.title);
    //         console.log(currentCard.innerText);
    //         if (currentCard.innerText == el.title) {
    //             return
    //         }
    //     })

    // })
    getMovies()
}

function createMovie(movie) {
    const element = document.createElement(`div`);
    element.classList.add("card");
    element.innerHTML = ` <img class= "card-img-top" src = "${movie.img}"
    alt = "Card image cap" width = "400" >
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
    dataTest = data;
}

