const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function personagemSalta(event) {

  if (event.keyCode === 32) {

    if (!isJumping) {
      pular();
    }
  }
}

function pular() {

  isJumping = true;

  let upInterval = setInterval(() => {

    if (position >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {

        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }

      }, 20);

    } else {
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

function obstaculo() {

  const cactus = document.createElement('div');

  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {

    if (cactusPosition < -60) {
      clearInterval(leftTimer);
      background.removeChild(cactus);

    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = `<div class="text-center">
                                <h3 class="game-over">Game Hover</h3>
                                <hr>
                                <a class="btn btn-success" href="/login">Voltar</a>
                                </div>`;
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';

    }
  }, 20);

  setTimeout(obstaculo, randomTime);

}

obstaculo();
document.addEventListener('keyup', personagemSalta);