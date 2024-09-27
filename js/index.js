document.addEventListener('DOMContentLoaded', () => {
  const player1Character = localStorage.getItem('player1Character'); 
  const player2Character = localStorage.getItem('player2Character'); 

  console.log('Jugador 1 seleccionó:', player1Character);
  console.log('Jugador 2 seleccionó:', player2Character);

  if (player1Character === 'fin' || player1Character === 'mordecai') {
      const heroImage = document.querySelector('#hero img');
      heroImage.src = `./assets/${player1Character}.png`;
      heroImage.alt = player1Character;
      console.log('Hero Image src:', heroImage.src);
  } else {
      console.warn('Jugador 1 tiene un personaje no válido:', player1Character);
  }

  if (player2Character === 'mordecai' || player2Character === 'fin') {
      const enemyImage = document.querySelector('#enemy img');
      enemyImage.src = `./assets/${player2Character}.png`; 
      enemyImage.alt = player2Character;
      console.log('Enemy Image src:', enemyImage.src);
  } else {
      console.warn('Jugador 2 tiene un personaje no válido:', player2Character);
  }
});

document.getElementById('exit-button').addEventListener('click', () => {
  window.location.href = "index.html";
});
