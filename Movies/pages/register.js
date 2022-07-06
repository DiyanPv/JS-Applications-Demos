const registerSection = document.getElementById(`form-sign-up`)
const toHide = document.querySelectorAll(`.view-section`);
function hideAll() {
    toHide.forEach(el => el.style.display = `none`)
}
export function registerPage() {
    hideAll()
    registerSection.style.display = `block`
}