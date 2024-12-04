document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fbi').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('audio').play();
        document.getElementById('fbi').remove();
        document.cookie = "fbi_removed=true; expires=Thu, 19 Jan 2038 03:14:07 UTC; path=/";
    });

    if (document.cookie.indexOf('fbi_removed=true') !== -1) {
        document.getElementById('fbi').remove();
    }
});

document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.card');
    const rotateX = ((e.clientY - (card.offsetHeight / 2 + card.offsetTop)) / card.offsetHeight) * 7.5;
    const rotateY = ((e.clientX - (card.offsetWidth / 2 + card.offsetLeft)) / card.offsetWidth) * 7.5; 
    document.querySelector('.rotating-box').style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});
