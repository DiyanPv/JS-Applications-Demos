const loginSection = document.getElementById(`form-login`);
const toHide = document.querySelectorAll(`.view-section`);
export function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function showLogin() {
    hideAll()
    loginSection.style.display = `block`
    loginSection.querySelector(`form`).addEventListener(`submit`, (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        let emailInput = form.get(`email`);
        let passwordInput = form.get(`password`)
        const url = `http://localhost:3030/users/login`
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailInput, passwordInput })
        })
    })
}