export async function request(url, method, data) {

    const host = `http://localhost:3030`
    const options = {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }

    const user = JSON.parse(localStorage.getItem(`user`));
    if (user) {
        const token = user.accessToken;
        options.headers["X-Authorization"] = token;
    }
    try {
        const response = await fetch(`${host}/${url}`, options);
        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        }
        return response.json()
    } catch (err) {
        alert(err.message)
        throw err;
    }
}
