// Élément qui affiche les informations à l'écran
const message = document.querySelector("#message");
const marqueur = document.querySelector("a-nft");

// La caméra a démarré
window.addEventListener("camera-init", () => {
    message.textContent = "Caméra prête : chargement du marqueur...";
});

// La caméra n'a pas pu démarrer
window.addEventListener("camera-error", () => {
    message.textContent = "Erreur : impossible d'accéder à la caméra.";
});

// Le chargement des fichiers NFT a commencé
marqueur.addEventListener("arjs-nft-loading", () => {
    message.textContent = "Chargement des fichiers du marqueur...";
});

// Les fichiers NFT sont chargés
marqueur.addEventListener("arjs-nft-loaded", () => {
    message.textContent = "Marqueur chargé : vise la carte avec la caméra.";
});

// Le marqueur a été reconnu
marqueur.addEventListener("markerFound", () => {
    message.textContent = "Marqueur détecté !";
});

// Le marqueur n'est plus visible
marqueur.addEventListener("markerLost", () => {
    message.textContent = "Marqueur perdu : vise à nouveau la carte.";
});
