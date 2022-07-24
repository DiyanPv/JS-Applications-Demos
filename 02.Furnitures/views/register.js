import { html, render } from "../node_modules/lit-html/lit-html.js"
import { register } from "../api/api.js";
import { dashboardCreate } from "./dashboard.js";
import page from "../node_modules/page/page.mjs"
const main = document.querySelector(`.container`);

const template = () => `<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`



export function registerPage() {
    main.innerHTML = template()
    registerUser()

}


function registerUser() {
    document.querySelector(`form`).addEventListener(`submit`, (e) => {
        e.preventDefault();
        let em = document.getElementById(`email`);
        let pas = document.getElementById(`password`);
        let repas = document.getElementById(`rePass`);

        if (pas.value == repas.value && em.value != `` && pas.value != ``) {
            register(em.value, pas.value);
            em.value = ``;
            pas.value = ``;
            repas.value = ``
            page.redirect(`/`)
        }
    })
}