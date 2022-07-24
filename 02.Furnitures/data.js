import { request } from "./api/api.js"

export async function getFurniture() {
    return await request(`http://localhost:3030/data/catalog`)
}

export async function itemDetailsId(id) {
    return await request(`http://localhost:3030/data/catalog/${id}`)
}

export async function updateItem(id) {
    return await request(`http://localhost:3030/data/catalog/${id}`, {
        method: `PUT`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })
}


export async function deleteItem(id) {
    const token = sessionStorage.getItem(`authToken`);
    return await request(`http://localhost:3030/data/catalog/${id}`, {
        method: `DELETE`,
        headers: {
            'Content-Type': "application/json",
            "X-Authorization": token
        }
    })
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem(`userID`);
    console.log(userId);
    return await request(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function createRecord(data) {
    const token = sessionStorage.getItem(`authToken`);
    return await request(`http://localhost:3030/data/catalog`, {
        method: `POST`,
        headers: {
            'Content-Type': "application/json",
            "X-Authorization": token
        },
        body: JSON.stringify(data)
    })
}


export async function editRecord(id, data) {
    const token = sessionStorage.getItem(`authToken`);
    console.log(token);
    return await request(`http://localhost:3030/data/catalog/${id}`, {
        method: `PUT`,
        headers: {
            "X-Authorization": token
        },
        body: JSON.stringify(data)

    })
}