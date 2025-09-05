function createHome() {
    const home = document.createElement('div');
    home.classList.add("home");

    const tagLine = document.createElement("h1");
    tagLine.textContent = "Tag line for the restaurant"

    const restaurantImg = document.createElement("img");
    restaurantImg.source = "";
    restaurantImg.alt = "restaurant image";

    const description = document.createElement("p");
    description.textContent = "Description of the restaurant";

    home.appendChild(tagLine);
    home.appendChild(restaurantImg);
    home.appendChild(description);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;