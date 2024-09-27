document.addEventListener('DOMContentLoaded', () => {
  const player1Character = localStorage.getItem('player1Character'); 
  const player2Character = localStorage.getItem('player2Character'); 

  console.log('Jugador 1 seleccionó:', player1Character);
  console.log('Jugador 2 seleccionó:', player2Character);

  // Cambiar la imagen del héroe (Jugador 1) según el personaje seleccionado
  if (player1Character === 'fin' || player1Character === 'mordecai') {
      const heroImage = document.querySelector('#hero img');
      heroImage.src = `./assets/${player1Character}.png`; // Ejemplo: ./assets/fin.png
      heroImage.alt = player1Character;
      console.log('Hero Image src:', heroImage.src);
  } else {
      console.warn('Jugador 1 tiene un personaje no válido:', player1Character);
  }

  // Cambiar la imagen del enemigo (Jugador 2) según el personaje seleccionado
  if (player2Character === 'mordecai' || player2Character === 'fin') {
      const enemyImage = document.querySelector('#enemy img');
      enemyImage.src = `./assets/${player2Character}.png`; // Ejemplo: ./assets/mordecai.png
      enemyImage.alt = player2Character;
      console.log('Enemy Image src:', enemyImage.src);
  } else {
      console.warn('Jugador 2 tiene un personaje no válido:', player2Character);
  }
});

// Acción del botón "Salir"
document.getElementById('exit-button').addEventListener('click', () => {
  window.location.href = "index.html"; // Redirige a la página de inicio
});
