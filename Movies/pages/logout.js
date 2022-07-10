import { homePageRend } from "./mainscreen.js";
export function logoutFunc() {
    localStorage.removeItem(`user`);
    alert(`Logged out`);
    homePageRend()
}