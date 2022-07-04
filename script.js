const divColor = document.querySelectorAll('.color');
console.log(divColor);
const black = divColor[0];
black.style.background = 'black';
// console.log(black);
const purple = divColor[1];
purple.style.background = 'purple';
const yellow = divColor[2];
yellow.style.background = 'yellow';
const blue = divColor[3];
blue.style.background = 'rgb(0,217,255)';

const pixelBoard = document.querySelector('#pixel-board')
// console.log(pixelBoard);
for (let index = 0; index < 25; index += 1) {
    const criaPixel = document.createElement('div')
    criaPixel.className = 'pixel'
    pixelBoard.appendChild(criaPixel)
};


function selecionaCor(evento) {
    // console.log();
}

black.addEventListener('click', selecionaCor);
purple.addEventListener('click', selecionaCor);
yellow.addEventListener('click', selecionaCor);
blue.addEventListener('click', selecionaCor);