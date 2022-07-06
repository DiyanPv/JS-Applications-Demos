const homePage = document.getElementById(`home-page`)
const toHide = document.querySelectorAll(`.view-section`);
const addMovieBtn = document.getElementById(`add-movie-button`);
const movies = document.getElementById(`movie`)
function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function homePageRend() {
    hideAll()
    homePage.style.display = `block`
    addMovieBtn.style.display = `block`
    movies.style.display = `block`

}