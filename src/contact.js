function createContact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const tel = document.createElement("p");
    tel.textContent = "123 456 7890"

    const address = document.createElement("p");
    address.textContent = "888 Restaurant Drive"

    const location = document.createElement("img");
    location.src = "";
    location.alt = "restaurant location map";

    contact.appendChild(tel);
    contact.appendChild(address);
    contact.appendChild(location);
    
    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;