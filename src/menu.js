function createMenu() {
    const menu = document.createElement('menu');
    const menuItems = document.createElement('menuItems');
    menuItems.textContent = 'Menu';
    menu.appendChild(menuItems);
    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;