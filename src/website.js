import { createHome } from "./home"
import { createMenu } from "./menu"
import { createContact } from "./contact"

const main = document.createElement("main");

function createLogo() {
    const logo = document.createElement("h1");
    logo.textContent = "Muster Restaurant";
    return logo;
}

function createNavbar() {
    const changeCurrentPage = (page) => {
        [...main.children].forEach((child) => child?.remove());
        main.append(page);
    }

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", () => {
        const home = createHome();
        changeCurrentPage(home);
    });
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menü";
    menuBtn.addEventListener("click", () => {
        const menu = createMenu();
        changeCurrentPage(menu);
    });
    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Kontakt";
    contactBtn.addEventListener("click", () => {
        const contact = createContact();
        changeCurrentPage(contact);
    });

    const navbar = document.createElement("nav");
    navbar.id = "navbar";
    navbar.append(homeBtn, menuBtn, contactBtn);
    return navbar;
};

function createHeader() {
    const logo = createLogo();
    const navbar = createNavbar();
    const header = document.createElement("header");
    header.append(logo, navbar);
    return header;
}

function createMain() {
    main.append(createHome());
    return main;
}

export { createHeader, createMain };
