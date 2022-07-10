const createSection = document.getElementById(`add-movie`);
import { hideAll } from "./login.js";
export function createPage() {
    hideAll()
    createSection.style.display = `block`
}