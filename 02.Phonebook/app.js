function attachEvents() {
    const phonebook = document.getElementById(`phonebook`);
    const loadBtn = document.getElementById(`btnLoad`);
    const btnCreate = document.getElementById(`btnCreate`);
    const url = `http://localhost:3030/jsonstore/phonebook`
    const newPerson = document.getElementById(`person`);
    const newPhone = document.getElementById(`phone`);

    loadBtn.addEventListener(`click`, async (e) => {
        const response = await fetch(url);
        const dataReceived = await response.
            json();
        console.log(Object.values(dataReceived))
        phonebook.innerHTML = Object.values(dataReceived).map(({ person, phone, _id }) => `<li>${person}: ${phone}   <buton class="deletebutton" id="${_id}">Delete</button></li>`).join(``)
        //person
        //phone
        let liElements = phonebook.querySelectorAll(`li`)
        liElements.forEach(el => el.querySelector(`.deletebutton`).addEventListener(`click`, async (e) => {
            let idtobedeleted = e.target.getAttribute('id');
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }

            }

            fetch(`${url}/${idtobedeleted}`, options).then(res => res.json()).then(data => console.log(data))

        }))

    })
    btnCreate.addEventListener(`click`, async (e) => {
        const update = {
            person: newPerson.value,
            phone: newPhone.value,
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        };
        const response = await fetch(url, options);
        const dataReceived = await response.json();
        newPerson.value = ''
        newPhone.value = ''
    })


}

attachEvents();