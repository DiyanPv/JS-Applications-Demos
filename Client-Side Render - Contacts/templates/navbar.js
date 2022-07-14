import { html } from "../../node_modules/lit-html/lit-html.js"
let url = `http://localhost:3030/jsonstore/phonebook`;

export function addContact() {
    const form = document.querySelector(`#formes`);
    const newForm = new FormData(form);
    let name = newForm.get(`name`);
    let phone = newForm.get(`phone`);

    const data = {
        person: name,
        phone
    }
    const options = {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }

    fetch(url, options)

}
export const navBarTemplate = (addContact) => html`<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Employees</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
                <li class="nav-item">
                    <form @submit=${addContact} id="formes">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="phone" placeholder="Phone Number" />
                        <button>Submit</button>
                    </form>
                    <a class="nav-link" href="#">Add Employee</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;