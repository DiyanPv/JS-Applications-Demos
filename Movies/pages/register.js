import { homePageRend } from "./mainscreen.js";

const registerSection = document.getElementById(`form-sign-up`)
const toHide = document.querySelectorAll(`.view-section`);
const url = `http://localhost:3030/users/register`;
function hideAll() {
    toHide.forEach(el => el.style.display = `none`);
}
export function registerPage() {
    hideAll()
    registerSection.style.display = `block`;
    registerSection.addEventListener(`submit`, async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let emailInput = formData.get(`email`);
        let passWordInput = formData.get(`password`);
        let passWordRepeat = formData.get(`repeatPassword`);
        const options = {
            method: `POST`,
            body: JSON.stringify({ email: emailInput, password: passWordInput })
        }
        if (passWordInput == passWordRepeat && emailInput != '' && passWordInput != '') {
            let res = await fetch(url, options);
            const data = await res.json();
            console.log(data);
            localStorage.setItem(`user`, JSON.stringify(data));
            homePageRend()
        }
    })
}