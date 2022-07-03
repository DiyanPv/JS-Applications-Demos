import { authCheck } from "./auth.js";
const loginSection = document.querySelector(`.login`);
const formInput = loginSection.querySelector(`form`);
let url = `http://localhost:3030/users/login`
formInput.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const newForm = new FormData(e.currentTarget);
    const [email, password] = [newForm.get(`email`), newForm.get(`password`)]
    console.log(email);
    console.log(password);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(data => {
        localStorage.setItem(`user`, JSON.stringify(data));
        authCheck()

    })
})
export function renderLogin() {
    loginSection.style.display = `inline`

}