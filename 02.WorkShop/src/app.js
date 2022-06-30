window.addEventListener(`load`, () => {
    const baseurl = `http://localhost:3030`;
    const guest = document.querySelector(`#guest`);
    const user = document.querySelector(`#user`)
    fetch(`${baseurl}/jsonstore/cookbook/recipes`).
        then(res => res.json()).
        then(el => Object.values(el).forEach(el => createElement(renderPreview(el))));
    console.log(localStorage.accessToken);
    if (localStorage.accessToken !== undefined) {
        user.style.display = `block`
        const logOutBtn = document.getElementById(`logoutBtn`);
        logOutBtn.addEventListener(`click`, (e) => {
            localStorage.clear()
            window.location.reload()
        })
    } else {
        guest.style.display = `block`
    }

});

function createElement(recipe) {
    const mainEl = document.querySelector(`main`);
    mainEl.appendChild(recipe)
    let p = mainEl.querySelector(`p`);

}

function renderPreview(element) {


    let recipe = document.createElement(`article`);
    recipe.classList.add(`preview`);
    const id = element._id;
    recipe.addEventListener(`click`, (e) => {

        const urlLoad = `http://localhost:3030/jsonstore/cookbook/details/${id}`
        fetch(urlLoad)
            .then(res => res.json())
            .then(el => {
                const mainEl = document.querySelector(`main`);
                mainEl.innerHTML = ``;
                createElement(renderDetailedPreview(el))
                console.log(el);
            })
    })
    recipe.innerHTML = `
    <div class="title">
    <h2>${element.name}</h2>
        </div>
        <div class="small">
    <img src="${element.img}">
        </div>`;
    return recipe;
}

function renderDetailedPreview(element) {
    const article = document.createElement(`article`);
    article.innerHTML = `
    <h2>${element.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${element}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
               ${element.ingredients.map(x => `<li>${x}</li>`).join(``)}
                </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
    ${element.steps.map(x => `<p>${x}</p>`).join(``)}
    </div>`
    return article;
}
//below is the output from the fetch preview
// _id: '01', name: 'Recipe 1', img: 'assets/lasagna.jpg', steps: Array(3), ingredients: Array(4)}
// img: "assets/lasagna.jpg"
// ingredients: (4) ['1 tbsp Ingredient 1', '2 cups Ingredient 2', '500 g  Ingredient 3', '25 g Ingredient 4']
// name: "Recipe 1"
// steps: (3) ['Prepare ingredients', 'Mix ingredients', 'Cook until done']
// _id: "01"