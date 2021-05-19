function createHome() {
    const slogan = document.createElement("p");
    slogan.textContent = "Traditionelle, zeitlose Küche, familiengeführt seit 1956";
    
    const lachs = document.createElement("img");
    lachs.src = "../images/lachs-cottonbro.jpg";
    const steak = document.createElement("img");
    steak.src = "../images/steak-geraud-pfeiffer.jpg";
    const images = document.createElement("div");
    images.classList.add("images");
    images.append(lachs, steak);
    
    const home = document.createElement("div");
    home.classList.add("home");
    home.append(slogan, images);
    return home;
}

export {createHome};