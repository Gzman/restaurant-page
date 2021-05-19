function createHome() {
    const p = document.createElement("p");
    p.textContent = "Traditionelle, zeitlose und schmackhafte Gerichte. Familiengeführt seit 1956";
    const biography = document.createElement("p");
    biography.textContent = "Max Mustermann born in 1944. His passion was always cooking. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    const image1 = document.createElement("img");
    // image1.src = "../images/pl"
    // const image2 = document.createElement("img");
    // const image3 = document.createElement("img");
    const home = document.createElement("div");
    home.id = "home";
    home.append(p, biography, image1);
    return home;
}

export {createHome};