import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function createHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Restaurant Page';
    header.appendChild(title);
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        loadMenu();
    });
    
    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => {
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    copyright.textContent = 'Copyright 2025';
    footer.appendChild(copyright);
    return footer;
}

function initialize() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default initialize; 