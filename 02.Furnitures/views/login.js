import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { login } from "../api/api.js";
import { dashboardCreate } from "./dashboard.js";
const main = document.querySelector(`.container`);
export async function loginCreate(ctx) {
    main.innerHTML = templateLogin()
    loginUser()

}



const templateLogin = () => ` <div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
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
        <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`;


async function loginUser() {
    const form = document.querySelector(`form`);
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let em = document.getElementById(`email`);
        let pas = document.getElementById(`password`);
        let email = em.value;
        let password = pas.value;
        if (email != '' && password != ``) {
            try {
                login(email, password)
            } catch (err) {
                throw new Error(err)
            }

            em.value = ``
            pas.value = ``
            page.redirect(`/`)
        }

    })
}