function appendTable() {
    const table = document.querySelector(`#results tbody`);
    console.log(table);
    const url = `http://localhost:3030/jsonstore/collections/students`;

    async function getElement() {
        let initial = await fetch(url);
        let result = await initial.json();
        Object.values(result).forEach(el => {

            const firstName = el.firstName;
            const lastName = el.lastName;
            const facultyNumber = el.facultyNumber;
            let grade = Number(el.grade);

            const tr = document.createElement(`tr`);
            const firstNameCell = tr.insertCell(0);
            firstNameCell.innerText = firstName;


            const lastNameCell = tr.insertCell(1);
            lastNameCell.innerText = lastName;

            const faculty = tr.insertCell(2);
            faculty.innerText = facultyNumber;

            const gradeCell = tr.insertCell(3);
            gradeCell.innerText = grade;

            table.appendChild(tr)
            console.log(el);
        })
    }
    getElement()

    const submitBtn = document.getElementById(`submit`);
    submitBtn.addEventListener(`click`, async (e) => {
        e.preventDefault()
        const fisrtNameInput = document.querySelector(`.inputs [name="firstName"]`);
        const lastNameInput = document.querySelector(`.inputs [name="lastName"]`);
        const facultyInput = document.querySelector(`.inputs [name="facultyNumber"]`);
        const gradeInput = document.querySelector(`.inputs [name="grade"]`);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: fisrtNameInput.value,
                lastName: lastNameInput.value,
                facultyNumber: facultyInput.value,
                grade: gradeInput.value
            }),
        };
        let initial = await fetch(url, options);
        let data = await initial.json();
        console.log(data);
window.location.reload()
    })

}
appendTable()