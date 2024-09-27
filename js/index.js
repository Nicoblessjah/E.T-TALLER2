document.addEventListener('DOMContentLoaded', () => {
  const player1Character = localStorage.getItem('player1Character');
  const player2Character = localStorage.getItem('player2Character');

  if (player1Character && player2Character) {
      const heroImage = document.getElementById('selected-character1');
      heroImage.src = `assets/${player1Character}/${player1Character}.png`; 

      const enemyImage = document.getElementById('selected-character2');
      enemyImage.src = `assets/${player2Character}/${player2Character}.png`; 
  } else {
      window.location.href = './select_character.html';
  }
});