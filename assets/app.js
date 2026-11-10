// Élément qui affiche les informations à l'écran
const message = document.querySelector("#message");
const marqueur = document.querySelector("a-nft");
const pikachu = document.querySelector("#pikachu");

// Caméra démarrée
window.addEventListener("camera-init", () => {
    message.textContent = "Caméra prête : vise le marqueur...";
});

window.addEventListener("camera-error", () => {
    message.textContent = "Erreur : impossible d'accéder à la caméra.";
});

// Chargement du marqueur NFT
marqueur.addEventListener("arjs-nft-loading", () => {
    message.textContent = "Chargement du marqueur...";
});

marqueur.addEventListener("arjs-nft-loaded", () => {
    message.textContent = "Marqueur chargé : vise la carte.";
});

// Marqueur reconnu
marqueur.addEventListener("markerFound", () => {
    message.textContent = "Marqueur détecté : chargement de Pikachu...";
});

marqueur.addEventListener("markerLost", () => {
    message.textContent = "Marqueur perdu : vise à nouveau la carte.";
});

// Vérifier si le modèle 3D est chargé
pikachu.addEventListener("model-loaded", () => {
    message.textContent = "Pikachu chargé ! Marqueur détecté.";
    console.log("Pikachu : modèle 3D chargé correctement.");
});

pikachu.addEventListener("model-error", (event) => {
    message.textContent = "Erreur : le modèle Pikachu ne se charge pas.";
    console.error("Erreur de chargement du modèle 3D :", event.detail);
});
