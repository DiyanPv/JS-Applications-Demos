export function router(path) {
    if (path == `/`) {
        //render homepage
        const homeSection = document.querySelector(`.home`);
        homeSection.style.display = `block`
    }
}