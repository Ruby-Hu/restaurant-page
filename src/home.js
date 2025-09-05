function createHome() {
    const home = document.createElement('div');
    const homeItems = document.createElement('homeItems');
    homeItems.textContent = 'Home';
    home.appendChild(homeItems);
    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;