import { createHeader, createMain } from "./website"

(function renderWebSite() {
    const header = createHeader();
    const main = createMain();
    document.getElementById("content").append(header, main);
})();