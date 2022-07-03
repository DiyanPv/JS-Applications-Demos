const guestNav = document.querySelector(`#guest`)
const userNav = document.querySelector(`#user`);
console.log(guestNav);
console.log(userNav);

export function authCheck() {
    let userIsValid = localStorage.getItem(`user`);
    console.log(userIsValid);
    if (userIsValid) {
        let user = JSON.parse(userIsValid);
        userNav.style.display = `inline`
        guestNav.style.display = `none`
    } else {
        userNav.style.display = `none`
        guestNav.style.display = `inline`
    }
}

export function logout() {
    alert(`Successful Log Out`)
    localStorage.removeItem(`user`)
    userNav.style.display = `none`
    guestNav.style.display = `inline`
}
export function getToken() {
    let userIsValid = localStorage.getItem(`user`);
    if (userIsValid) {
        const token = JSON.parse(userIsValid)
        return token.accessToken
    }
}