import MenuContent from "../data/menu.json"

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const categories = Object.keys(MenuContent);
    categories.forEach((category) => {
        const categoryElement = createMenuCategory(category);

        MenuContent[category].forEach((entry) => {
            const entryElement = createMenuEntry(entry);
            categoryElement.append(entryElement);
        });

        menu.append(categoryElement);
    });
    return menu;
}

function createMenuCategory(name) {
    const title = document.createElement("p");
    title.classList.add("menu-category-title");
    title.textContent = name;

    const category = document.createElement("div");
    category.classList.add("menu-category");
    category.append(title);
    return category;
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

export { createMenu };