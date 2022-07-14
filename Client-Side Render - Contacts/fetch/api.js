export const getContacts = () => { return fetch(`http://localhost:3030/jsonstore/phonebook`).then(data => data.json()).then(contacts => Object.values(contacts)) };
