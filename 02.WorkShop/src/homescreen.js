const search = `http://localhost:3030/data/recipes`;

export async function renderHome() {
    const homeSection = document.querySelector(`.home`);
    homeSection.innerHTML = ''
    fetch(search).then(res => res.json()).then(data => {

        data.forEach(element => {
            // console.log(element);
            let toappend = renderRecipe(element);
            homeSection.appendChild(toappend)
        });
    })
    homeSection.style.display = `block`
}
function renderRecipe(input) {
    const recipeElement = document.createElement(`article`)
    recipeElement.classList.add(`preview`)
    recipeElement.innerHTML = `<div class="title">
  <h2>${input.name}</h2>
    </div>
    <div class="small"><img src="${input.img}" alt="">
    </div>`
    return recipeElement
}