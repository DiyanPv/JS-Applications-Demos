
const registerPage = document.querySelector(`#registerPage`);
const catalogue = document.querySelector(`#dashboard-holder`);
const detailsPage = document.querySelector(`#detailsPage`);
const createPage = document.querySelector(`#createPage`);
const wholeHome = document.querySelector(`#wholehome`);
export function hideAllShowCurrent(section) {
    wholeHome.innerHTML = ``;
    wholeHome.appendChild(section)
}

