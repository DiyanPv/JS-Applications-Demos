const loadBooksButton = document.querySelector(`#loadBooks`);
const tbody = document.querySelector(`tbody`);
const url = `http://localhost:3030/jsonstore/collections/books`;
const form = document.querySelector(`form`);
const submitBtn = document.querySelector(`form button`)

loadBooksButton.addEventListener(`click`, async (e) => {
    const initialRes = await fetch(url);
    const res = await initialRes.json();

    let [titleInput, authorInput] = form.querySelectorAll(`input`)
    let tds = tbody.querySelectorAll(`tr td`);
    tbody.innerHTML = ``
    Object.entries(res).forEach(el => {
        Array.from(tds).forEach(ell => {


        })
        console.log(el);
        let tr = document.createElement(`tr`);
        let id = el[0]

        tr.innerHTML = `<td>${el[1].title}</td>
                <td>${el[1].author}</td >
                <td><button class ="editbtn" id="${id}">Edit</button><button class="deletebtn"  id="${id}">Delete</button></td>`
        tbody.appendChild(tr);

    }

    )
    const editbtns = document.querySelectorAll(`.editbtn`);
    const deletebuttons = document.querySelectorAll(`.deletebtn`);
    editbtns.forEach(el => el.addEventListener(`click`, (e) => {
        let currentID = e.target.getAttribute(`id`);
        postData = {
            author: authorInput.value,
            title: titleInput.value
        }
        let options = {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        };
        submitBtn.textContent = `Edit`
        submitBtn.addEventListener(`click`, async (e) => {
            if (authorInput.value != '' && titleInput.value != '') {

                const initialRes = await fetch(`${url}/${currentID}`, options);
                submitBtn.textContent = `Submit`
            }
        })

    }))

    deletebuttons.forEach(el => el.addEventListener(`click`, async (e) => {
        let currentID = e.target.getAttribute(`id`);
        console.log(currentID);
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const initialRes = await fetch(`${url}/${currentID}`, options);
        const res = await initialRes.json();
    }))

})



submitBtn.addEventListener(`click`, async (e) => {
    e.preventDefault()
    let [titleInput, authorInput] = form.querySelectorAll(`input`)
    let tds = tbody.querySelectorAll(`tr td`);
    Array.from(tds).forEach(el => {

        if (String(el.textContent) == String(titleInput.value) || el.textContent == authorInput.value) {

            throw new Error(`Item is already in collection`)
        }


    })
    if (titleInput.value != '' && authorInput.value != '') {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titleInput.value,
                author: authorInput.value
            })
        };
        let initial = await fetch(url, options);
        let res = await initial.json();
        titleInput.value = '';
        authorInput.value = '';



    }


})


