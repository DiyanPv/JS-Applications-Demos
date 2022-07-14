import { navBarTemplate } from "./templates/navbar.js"
import { getContacts } from "./fetch/api.js";
import { contactTemplate } from "./templates/cardTemplate.js";
import { render, html } from "../node_modules/lit-html/lit-html.js"
import { contactDivTemplate } from "./templates/contactList.js";
import { addContact } from "./templates/navbar.js";
const addEmployee = document.getElementsByTagName(`a`)[4];
const arrayOfCards = await getContacts();
let contactsCatalogue = document.getElementById(`contacts`);
const navBar = document.getElementById(`navbar`)
const navBarTemplateResult = navBarTemplate(addContact);
render(navBarTemplateResult, navBar);
render(contactDivTemplate(arrayOfCards), contactsCatalogue)