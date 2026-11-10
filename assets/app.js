// On récupère le message affiché à l'écran
const message = document.querySelector("#message");

// La caméra est prête
window.addEventListener("camera-init", () => {
    message.textContent = "Caméra prête : vise le marqueur";
});

// Une erreur est survenue avec la caméra
window.addEventListener("camera-error", () => {
    message.textContent = "Impossible d'accéder à la caméra";
});

// Le marqueur a été reconnu
const marqueur = document.querySelector("a-nft");

marqueur.addEventListener("markerFound", () => {
    message.textContent = "Marqueur détecté !";
});

// Le marqueur n'est plus visible
marqueur.addEventListener("markerLost", () => {
    message.textContent = "Vise le marqueur avec la caméra";
});
