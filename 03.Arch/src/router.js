import { loginRend } from "./pages/login.js"
import { homePageRend } from "./pages/home.js"
let wholepage = document.getElementById(`homepage`);
export const router = {
    "/login": loginRend,
    "/home": homePageRend,

}
