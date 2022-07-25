import { request } from "./api.js";

const route = {
    "login": "users/login",
    "register": "users/register",
    "logout": "users/logout"
};

export async function login(email, password) {
    let user = await api.request(route.login, `POST`, { email, password });

    localStorage.setItem(`user`, JSON.stringify(user));
    return user;
};


export async function register(email, password) {
    let user = await api.request(route.register, `POST`, { email, password });

    localStorage.setItem(`user`, JSON.stringify(user))

};

export async function logout() {
    localStorage.removeItem(`user`)
};