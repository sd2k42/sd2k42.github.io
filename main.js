let clicked = false;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fbi').addEventListener('click', function(event) {
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
  const rotateX = ((e.clientY - (card.offsetHeight / 2 + card.offsetTop)) / card.offsetHeight) * 10.5;
  const rotateY = ((e.clientX - (card.offsetWidth / 2 + card.offsetLeft)) / card.offsetWidth) * 15.5; 
  document.querySelector('.rotating-box').style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

window.addEventListener('beforeunload', function(event) {
  if (clicked == true) {
    event.returnValue = '.';
    return '.';
  }
});