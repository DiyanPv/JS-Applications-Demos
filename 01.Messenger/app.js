function attachEvents() {
    const textarea = document.getElementById(`messages`);
    const nameInput = document.getElementById(`name`);
    const message = document.getElementById(`message`);
    const url = `http://localhost:3030/jsonstore/messenger`
    let sendButtonEl = document.querySelector(`#submit`)
    document.getElementById(`refresh`).addEventListener(`click`, refreshFunction)
    sendButtonEl.addEventListener(`click`, async (e) => {

        const update = {
            author: nameInput.value,
            content: message.value,
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        };

        const resp = await fetch(url, options)
        const data = await resp.json();
        console.log(data);
        nameInput.value = '';
        message.value = '';
    })


    // method: `POST`,
    // headers: {
    //     "Content-type": "application/json"
    // },
    // body:
    //     JSON.stringify(option)


    async function refreshFunction() {
        const resp = await fetch(url);
        const data = await resp.json();
        textarea.value = Object.values(data).map(({ author, content }) => `${author} : ${content}`).join(`\n`);
    }

}

attachEvents();