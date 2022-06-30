const loadBooksButton = document.querySelector(`#loadBooks`);
const tbody = document.querySelector(`tbody`)
const url = `http://localhost:3030/jsonstore/collections/books`;
loadBooksButton.addEventListener(`click`, async (e) => {
    const initialRes = await fetch(url);
    const res = await initialRes.json();
    let [titleInput, authorInput] = form.querySelectorAll(`input`)
    let tds = tbody.querySelectorAll(`tr td`);

    Object.values(res).forEach(el => {
        Array.from(tds).forEach(ell => {
            console.log(el);
            if (String(ell.textContent) == String(el.author) || ell.textContent == el.title) {
                throw new Error(`Item is already in collection`)
            }


        })
        let tr = document.createElement(`tr`);
        tr.innerHTML = `<td>${el.title}</td>
                <td>${el.author}</td >
                <td><button>Edit</button><button>Delete</button></td>`
        tbody.appendChild(tr)

    }


    )

})

const form = document.querySelector(`form`);
const submitBtn = document.querySelector(`form button`)

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
        titleInput.value = '';
        authorInput.value = '';
        let initial = await fetch(url, options);
        let res = await initial.json();



    }


})