let player1Character = null;
let player2Character = null;

function updateStartButton() {
    const startButton = document.getElementById('start-game-button');
    startButton.disabled = !(player1Character && player2Character);
}

function selectCharacter(player, character) {
    const characterImage = `./assets/${character.toLowerCase()}/${character.toLowerCase()}.png`;

    if (player === 1) {
        player1Character = character.toLowerCase();
        document.getElementById('selected-character1').src = characterImage; 
        console.log(`Jugador 1 ha seleccionado: ${player1Character}`);
    } else {
        player2Character = character.toLowerCase();
        document.getElementById('selected-character2').src = characterImage; 
        console.log(`Jugador 2 ha seleccionado: ${player2Character}`);
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
        localStorage.setItem('player1Character', player1Character);
        localStorage.setItem('player2Character', player2Character);
        window.location.href = "./index.html";
    }
});

document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = "./menu.html";
});
