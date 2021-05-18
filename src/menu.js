// Es6 import doesn't support Json import; however Webpack does
import MenuData from "../data/menu.json"

function createMenu() {
    const menuContent = document.createElement("div");
    menuContent.id = "menu-page";
    const categories = Object.keys(MenuData);
    categories.forEach((category) => {
        const cat = document.createElement("div");
        cat.classList.add("menu-category");
        const categoryTitle = document.createElement("p");
        categoryTitle.classList.add("menu-category-title");
        categoryTitle.textContent = category;
        cat.append(categoryTitle);
        MenuData[category].forEach((entry) => {
            const div = createMenuEntry(entry);
            cat.append(div);
        });
        menuContent.append(cat);
    });
    return menuContent;
}

function createMenuEntry(entryData) {
    const title = document.createElement("p");
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