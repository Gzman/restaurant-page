import { createFooter, createHeader, createMain } from "./website"

(function renderWebSite() {
    const header = createHeader();
    const main = createMain();
    const footer = createFooter()
    document.getElementById("content").append(header, main, footer);
})();