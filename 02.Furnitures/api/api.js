export async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const err = await response.json();
            return err.message;
        }
        const data = await response.json();

        return data
    } catch (err) {
        alert(err)
    }
}


export async function login(email, password) {

    const result = await request(`http://localhost:3030/users/login`, {
        method: `POST`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    sessionStorage.setItem(`email`, result.email)
    sessionStorage.setItem(`authToken`, result.accessToken)
    sessionStorage.setItem(`userID`, result._id)
    return result;

}



export async function register(email, password) {

    const result = await request(`http://localhost:3030/users/register`, {
        method: `POST`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    sessionStorage.setItem(`email`, result.email)
    sessionStorage.setItem(`authToken`, result.accessToken)
    sessionStorage.setItem(`userId`, result._id)
    return result;

}

export async function logout() {

    sessionStorage.clear()
}




export async function res() { return await request(`http://localhost:3030/data/catalog`); }