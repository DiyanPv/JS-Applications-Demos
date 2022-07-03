const createRecipeSection = document.querySelector(`.create-recipe`);
const homeSection = document.querySelector(`.home`);
import { getToken } from "./auth.js";
export function renderNewRecipe() {
    createRecipeSection.style.display = `block`
    const form = createRecipeSection.querySelector(`form`);

    let url = `http://localhost:3030/data/recipes`
    form.addEventListener(`submit`, (e) => {
        e.preventDefault()
        let newform = new FormData(e.currentTarget);
        let name = newform.get(`name`);
        let image = newform.get(`img`);
        let ingredients = newform.get(`ingredients`);
        let prep = newform.get(`steps`)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify({ name, img: image, ingredients, steps: prep })
        }).then(res => res.json()).then(data => data)


    })

}