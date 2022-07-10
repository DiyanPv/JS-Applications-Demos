const loginSection = document.getElementById(`form-login`);
const toHide = document.querySelectorAll(`.view-section`);
const homePage = document.getElementById(`home-page`);
const guestItems = document.querySelectorAll(".guest");
const userItems = document.querySelectorAll(`.user`);
import { homePageRend } from "./mainscreen.js";
export function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function showLogin() {
    hideAll()
    loginSection.style.display = `block`
    loginSection.querySelector(`form`).addEventListener(`submit`, async (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        let emailInput = form.get(`email`);
        let passwordInput = form.get(`password`)
        const url = `http://localhost:3030/users/login`
        const res = fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: emailInput, password: passwordInput })
        })
        if (!(await res).ok) {
            alert(`Wrong email or password`)
        } else {
            hideAll()
            const guestarr = Array.from(guestItems)
            guestItems.forEach(el => el.style.display = `block`);
            const userArr = Array.from(userItems);
            userArr.forEach(el => el.style.display = `block`)
            homePageRend()

        }

    })
}

export function updateNav() {
    const user = localStorage.getItem(`user`)
}