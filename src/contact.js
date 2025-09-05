function createContact() {
    const contact = document.createElement('contact');
    const contactItems = document.createElement('contactItems');
    contactItems.textContent = 'Contact';
    contact.appendChild(contactItems);
    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;