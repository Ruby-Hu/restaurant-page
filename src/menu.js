import food from "./images/Snoopy-doghouse-1.jpeg";

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu"

    menu.appendChild(menuTitle);

    menuItems.appendChild(createMenuItem(
        "menuItem 1",
        "whatever ingredient that's inside"
    ));

    menuItems.appendChild(createMenuItem(
        "menuItem 2",
        "whatever ingredient that's inside"
    ));

    menuItems.appendChild(createMenuItem(
        "menuItem 3",
        "whatever ingredient that's inside"
    ));

    menuItems.appendChild(createMenuItem(
        "menuItem 4",
        "whatever ingredient that's inside"
    ));

    menu.appendChild(menuItems);

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodImg = document.createElement("img");
    foodImg.src = food;
    foodImg.alt = "food pic";

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;