import MenuData from "../data/menu.json"

function createMenu() {
    const menu = document.createElement("div");
    menu.id = "menu";
    const categories = Object.keys(MenuData);
    categories.forEach((category) => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("menu-category");
        const categoryTitle = document.createElement("p");
        categoryTitle.classList.add("menu-category-title");
        categoryTitle.textContent = category;
        categoryElement.append(categoryTitle);
        MenuData[category].forEach((entry) => {
            const div = createMenuEntry(entry);
            categoryElement.append(div);
        });
        menu.append(categoryElement);
    });
    return menu;
}

function createMenuEntry(entryData) {
    const title = document.createElement("h3");
    title.classList.add("menu-entry-title");
    title.textContent = entryData?.name;
    const description = document.createElement("p");
    description.classList.add("menu-entry-description");
    description.textContent = entryData?.content;
    const price = document.createElement("p");
    price.classList.add("menu-entry-price");
    price.textContent = entryData?.price;
    const entry = document.createElement("div");
    entry.classList.add("menu-entry");
    entry.append(title, description, price);
    return entry;
}

export {createMenu};