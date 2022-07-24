import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs"
import { dashboardCreate } from "./dashboard.js";
export function logoutFunc() {
    logout();
    page.redirect(`/`)
}