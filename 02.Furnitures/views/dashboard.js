import { html, render } from "../node_modules/lit-html/lit-html.js"
import { request } from "../api/api.js";
import page from "../node_modules/page/page.mjs"
import { res } from "../api/api.js";
const main = document.querySelector(`.container`);
const userDetails = document.getElementById(`user`);
const guestDetails = document.getElementById(`guest`);
export async function dashboardCreate() {
    main.innerHTML = template(await res())
    if (sessionStorage.getItem(`authToken`) && sessionStorage.getItem(`authToken`) != undefined) {
        userDetails.style.display = `inline`
        guestDetails.style.display = `none`
    } else {
        userDetails.style.display = `none`
        guestDetails.style.display = `inline`
    }
}


export const template = (data) => `<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>

<div class="row space-top">

    ${data.map(x => card(x)).join(``)}


</div>`

const card = (item) => `<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href=${item._id} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`