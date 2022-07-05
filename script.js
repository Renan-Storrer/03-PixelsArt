const divColor = document.querySelectorAll('.color');
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
}

function selecionaCor(evento) {
  const cores = document.querySelectorAll('.color');
  // console.log(cores);
  for (let index = 0; index < cores.length; index += 1) {
    if (cores[index].className = 'color selected') {
      cores[index].classList.remove('selected');
    }
  }
  evento.target.classList.add('selected');
}

black.addEventListener('click', selecionaCor);
purple.addEventListener('click', selecionaCor);
yellow.addEventListener('click', selecionaCor);
blue.addEventListener('click', selecionaCor);

function pintaPixel(evento) {
  const corSelecionada = document.querySelector('.selected');
  const pixelSelecionado = evento.target;
  pixelSelecionado.style.backgroundColor = corSelecionada.style.backgroundColor;
  // getComputedStyle
  // console.log(pixelSelecionado.style);
  // console.log(corSelecionada.style.backgroundColor);
  console.log('test');
}

const divs = document.querySelectorAll('.pixel');
// console.log(divs);
for (let i = 0; i < divs.length; i += 1) {
  divs[i].addEventListener('click', pintaPixel);
}

function limpaPixel() {
  const pixeis = document.querySelectorAll('.pixel');
  // console.log(pixeis);
  for (let i = 0; i < pixeis.length; i += 1) {
    pixeis[i].style.backgroundColor = 'white';
    console.log(pixeis[i].style.backgroundColor);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', limpaPixel);

const buttonPixel = document.querySelector('#generate-board')
// console.log(buttonPixel);
buttonPixel.addEventListener('click', alteraTamanho);

function alteraTamanho() {
  const pixeis = document.querySelectorAll('.pixel');
  let input = document.querySelector('#board-size').value;
  console.log(input);
  if (input === '') {
    window.alert('Board inválido!')
  } else {
    for (let i = 0; i < pixeis.length; i += 1) {
      // console.log(pixeis[i]);
      pixeis[i].classList.remove('pixel');
    }
    if (input <= 5) {
      input = 5
    } else if (input >= 50) {
      input = 50
    }
    let quadrado = input * input
    for (let index = 0; index < quadrado; index += 1) {
      const criaPixel = document.createElement('div');
      criaPixel.className = 'pixel';
      criaPixel.style.backgroundColor = 'white'
      criaPixel.addEventListener('click', pintaPixel)
      pixelBoard.appendChild(criaPixel);

    }
    const quadradoPixel = document.querySelector('#pixel-board');
    console.log(quadradoPixel);
  }
}
const pixeis = document.querySelectorAll('.pixel');
// console.log(pixeis);

function limitaTamanho() {
  const pixeis = document.querySelectorAll('.pixel');

}