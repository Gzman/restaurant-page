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
    const renderPage = (page) => {
        [...main.children].forEach((child) => child?.remove());
        main.append(page);
    }

    const isButtonActive = (btn) => btn.classList.contains("button-active");

    const setButtonActive = (btn) => {
        document.querySelectorAll("button").forEach((button) => button.classList.remove("button-active"));
        btn.classList.add("button-active");
    }

    function changePage(event, pageLoader) {
        const btn = event.currentTarget;
        if (isButtonActive(btn)) {
            return;
        }
        setButtonActive(btn);
        const page = pageLoader();
        renderPage(page);
    }

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => changePage(e, createHome));

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menü";
    menuBtn.addEventListener("click", (e) => changePage(e, createMenu));

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Kontakt";
    contactBtn.addEventListener("click", (e) => changePage(e, createContact));

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

function createFooter() {
    const link = document.createElement("a");
    link.textContent = "Crafted by Gzman";
    link.href = "https://www.github.com/Gzman";
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.append(link);
    return footer;
}

export { createHeader, createMain, createFooter };
