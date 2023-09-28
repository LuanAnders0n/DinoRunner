document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino');
  const box = document.querySelector('.box');

  let animationStopped = false;

  const jump = () => {
    if (dino) {
      dino.classList.add('jump');

      setTimeout(() => {
        dino.classList.remove('jump');
      }, 500);
    }
  };

  const loop = setInterval(() => {
    if (!animationStopped) {
      const boxPosition = box.offsetLeft;
      const dinoPosition = +window
        .getComputedStyle(dino)
        .bottom.replace('px', '');

      if (boxPosition <= 60 && boxPosition > 0 && dinoPosition < 50) {
        box.style.animationPlayState = 'paused';
        clearInterval(loop);

        dino.style.animationPlayState = 'paused';
        clearInterval(loop);
        dino.style.bottom = `${dinoPosition}px`;

        dino.src = 'images/1.png';
        clearInterval(loop);

        location.reload();
        a;
      }
    }
  }, 10);

  document.addEventListener('keydown', jump);
});
