const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const startBtn = document.querySelector('.start-btn');
const containerGame = document.querySelector('.container-game-start');

const startGame = () => {
    const loop = setInterval(() => {
        containerGame.classList.add('started');
        pipe.classList.add('started');
        clouds.classList.add('started');

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = clouds.offsetLeft;
        
        if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 85) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`; 
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './assets/img/game-over.png'
            mario.style.width = '75px';
            mario.style.marginLeft = '45px';
    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;
            
            clearInterval(loop);

            if (containerGame.classList.contains('started')) containerGame.classList.remove('started');
        }
    })
}

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);
startBtn.addEventListener('click', startGame);