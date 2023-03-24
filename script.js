const pokemon = document.getElementById('pokemon');

pokemon.addEventListener('click', () => {
  alert('ポケモンを捕まえた！');
  movePokemon();
});

function throwBall() {
  alert('モンスターボールを投げたが、ポケモンは逃げた！');
  movePokemon();
}

function movePokemon() {
  const gameContainer = document.querySelector('.game-container');
  const x = Math.random() * (gameContainer.clientWidth - pokemon.clientWidth);
  const y = Math.random() * (gameContainer.clientHeight - pokemon.clientHeight);

  pokemon.style.left = `${x}px`;
  pokemon.style.top = `${y}px`;
}

movePokemon();
