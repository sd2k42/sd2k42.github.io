
let clicked = false;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('links').innerHTML += `
            <a href="https://onlyfans.com/sd2k42" id="fbi">
            <img src="common/of.svg" width="75vh" style="pointer-events: none;">
          </a>`;
  document.getElementById('body').innerHTML += `<audio id="audio" src="common/gooner.ogg"></audio>`;

  document.getElementById('fbi').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('audio').play();
    document.getElementById('fbi').remove();
    clicked = true;
    document.querySelector('.curtain').style.opacity = 1;
    document.querySelector('.gooner').style.opacity = 1;
    document.title = 'porn addict';
    document.getElementById('html').classList.add('html');
    document.querySelector('.card').remove();
    document.documentElement.requestFullscreen();
  });
});

document.addEventListener('mousemove', (e) => {
  const card = document.querySelector('.card');
  const box = document.querySelector('.rotating-box');
  const rotateX = ((e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight) * 10.5;
  const rotateY = ((e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth) * 15.5;
  const moveX = (e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth * -40;
  const moveY = (e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight * -40;
  const scale = 1 + (Math.abs(moveX) + Math.abs(moveY)) / -2000;
  
  box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateX(${moveX}px) translateY(${moveY}px) scale(${scale})`;
});

window.addEventListener('beforeunload', function (event) {
  if (clicked == true) {
    event.returnValue = '.';
  }
});

document.addEventListener('fullscreenchange', async () => {
  if (document.fullscreenElement) {
    await navigator.keyboard.lock(['Escape', 'F11']);
    return;
  }
});