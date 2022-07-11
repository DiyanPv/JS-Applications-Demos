const createSection = document.getElementById(`add-movie`);
import { hideAll } from "./login.js";
import { homePageRend } from "./mainscreen.js";
export function createPage() {
    hideAll()
    createSection.style.display = `block`
    const formSubmit = document.querySelector(`#addMovieForm`);
    formSubmit.addEventListener(`submit`, async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        let titleInput = formData.get(`title`);
        let description = formData.get(`description`);
        let imgUrl = formData.get(`imageUrl`);
        let url = `http://localhost:3030/data/movies`;
        let userr = localStorage.getItem(`user`)
        let accessToken = JSON.parse(userr).accessToken;
        let request = {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": accessToken
            },
            body: JSON.stringify({
                title: titleInput,
                description,
                img: imgUrl
            })
        }
        if (titleInput != `` && imgUrl != ``) {
            let res = await fetch(url, request);
            let data = await res.json();
            homePageRend()
        }

    })
}