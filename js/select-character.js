let player1Character = null;
let player2Character = null;

function updateStartButton() {
    const startButton = document.getElementById('start-game-button');
    if (player1Character && player2Character) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

function selectCharacter(player, character) {
    if (player === 1) {
        player1Character = character === "Heroe" ? "catarina" : "artorias"; // Actualiza los nombres
    } else {
        player2Character = character === "Heroe" ? "catarina" : "artorias"; // Actualiza los nombres
    }
    updateStartButton();
}

function nextCharacter(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.appendChild(carousel.firstElementChild);
    updateSelection(carouselId);
}

function prevCharacter(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    updateSelection(carouselId);
}

function updateSelection(carouselId) {
    const carousel = document.getElementById(carouselId);
    const selectedCharacter = carousel.children[0].getAttribute('data-character');
    if (carouselId === 'carousel1') {
        selectCharacter(1, selectedCharacter);
    } else {
        selectCharacter(2, selectedCharacter);
    }
}

document.getElementById('start-game-button').addEventListener('click', () => {
    if (player1Character && player2Character) {
        // Guardar los personajes seleccionados en localStorage en minúsculas
        localStorage.setItem('player1Character', player1Character);
        localStorage.setItem('player2Character', player2Character);

        // Redirigir a la página de juego
        window.location.href = "./index.html";
    }
});

document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = "./index.html";
});



