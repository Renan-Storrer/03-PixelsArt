const divColor = document.querySelectorAll('.color');
// console.log(divColor);
const black = divColor[0];
black.style.background = 'black';
// console.log(black);
const purple = divColor[1];
purple.style.background = 'purple';
const yellow = divColor[2];
yellow.style.background = 'yellow';
const blue = divColor[3];
blue.style.background = 'rgb(0,217,255)';

const pixelBoard = document.querySelector('#pixel-board');
// console.log(pixelBoard);
for (let index = 0; index < 25; index += 1) {
  const criaPixel = document.createElement('div');
  criaPixel.className = 'pixel';
  pixelBoard.appendChild(criaPixel);
};

function selecionaCor(evento) {
  let cores = document.querySelectorAll('.color');
  // console.log(cores);
  for (let index = 0; index < cores.length; index += 1) {
    if (cores[index].className = 'color selected') {
            cores[index].classList.remove('selected');
        } else {
            cores[index]; classList.add('selected');
        }
    }
  evento.target.classList.add('selected');
}

black.addEventListener('click', selecionaCor);
purple.addEventListener('click', selecionaCor);
yellow.addEventListener('click', selecionaCor);
blue.addEventListener('click', selecionaCor);

function pintaPixel(evento) {
    let corSelecionada = document.querySelector('.selected');
    let pixelSelecionado = evento.target;
    pixelSelecionado.style.backgroundColor = corSelecionada.style.backgroundColor
    //getComputedStyle
    // console.log(pixelSelecionado.style);
    // console.log(corSelecionada.style.backgroundColor);
}

let divs = document.querySelectorAll('.pixel')
console.log(divs);
for (let i = 0; i < divs.length; i += 1) {
    divs[i].addEventListener('click', pintaPixel);
}