const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

document.addEventListener('keydown', () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
});

