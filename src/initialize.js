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
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    
    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
        if (button !== this) {
        button.classList.remove("active");
        }
    });

    button.classList.add("active");
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

    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
}

export default initialize; 