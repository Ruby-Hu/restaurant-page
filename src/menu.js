function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const seasonal = document.createElement("h1");
    seasonal.classList.add("seasonal");
    seasonal.textContent = "Seasonal Specials"

    const menuIntro = document.createElement("p");
    menuIntro.textContent = "For the full menu please view here."

    menu.appendChild(seasonal);
    menu.appendChild(createMenuItem(
        "menuItem 1",
        "whatever ingredient that's inside"
    ));

    menu.appendChild(createMenuItem(
        "menuItem 2",
        "whatever ingredient that's inside"
    ));

    menu.appendChild(createMenuItem(
        "menuItem 3",
        "whatever ingredient that's inside"
    ));

    menu.appendChild(createMenuItem(
        "menuItem 4",
        "whatever ingredient that's inside"
    ));

    menu.appendChild(menuIntro);

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodImg = document.createElement("img");
    foodImg.src = "";
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