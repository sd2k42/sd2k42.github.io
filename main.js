let clicked = false;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('fbi').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('audio').play();
    document.getElementById('fbi').remove();
    clicked = true;
    document.documentElement.requestFullscreen();
    document.documentElement.mozRequestFullScreen();
    document.documentElement.webkitRequestFullscreen();
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