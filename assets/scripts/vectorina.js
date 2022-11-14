import birdsData from './data_birds.js';

let roundFoto = document.querySelector('.round-foto');
let roundName = document.querySelector('.round-name');
let roundAudio = document.querySelector('.round-audio');
let headerScore = document.querySelector('.header-score');
let globalSourse = 0;
let categories = document.querySelectorAll('.categories');

//выбрать рандомную птицу из 6
function getRandomInt() {
  return Math.floor(Math.random() * 6);
}

//определение раунда
let roundNumber = 0
categories[roundNumber].classList.add('done');
headerScore.textContent = `Счет: 0`;
//вывод верной птицы на экран 
let displayBird = function() {
  roundFoto.style.backgroundImage = `url('${birdsData[roundNumber][roundBird].image}')`;
  roundName.textContent = `${birdsData[roundNumber][roundBird].name}`;
};
//вывод выбранной птицы на допю экран
let selectedBirdFoto = document.querySelector('.choiced-bird-foto');
let selectedBirdName = document.querySelector('.choiced-bird-name');
let selectedBirdSecondName = document.querySelector('.choiced-bird-name_second');
let selectedBirdText = document.querySelector('.choiced-bird-text');
let selectedBirdAudio = document.querySelector('.choiced-bird-song');

function findBird(id) {
  selectedBirdFoto.style.backgroundImage = `url('${birdsData[roundNumber][id].image}')`
  selectedBirdName.textContent = birdsData[roundNumber][id].name;
  selectedBirdSecondName.textContent = birdsData[roundNumber][id].species;
  selectedBirdText.textContent = birdsData[roundNumber][id].description;
  selectedBirdAudio.classList.remove('display')
  selectedBirdAudio.setAttribute('src', `${birdsData[roundNumber][id].audio}`);
}
//очистить выбор
function clearBirdInfo(id) {
  selectedBirdFoto.style.backgroundImage = `none`
  selectedBirdName.textContent = '';
  selectedBirdSecondName.textContent = '';
  selectedBirdText.textContent = '';
  selectedBirdAudio.classList.add('display')
  selectedBirdAudio.setAttribute('src', `${birdsData[roundNumber][id].audio}`);
}

//round start
let roundBird = getRandomInt();
console.log(roundBird)
let questionBird = function () {
  roundFoto.style.backgroundImage = `url('/assets/vectorina/bird.jpg')`;
  roundName.textContent = `*******`;
  roundAudio.setAttribute('src', `${birdsData[roundNumber][roundBird].audio}`);
  document.querySelector('.choice-bird-1').textContent = birdsData[roundNumber][0].name;
  document.querySelector('.choice-bird-1').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
  document.querySelector('.choice-bird-2').textContent = birdsData[roundNumber][1].name;
  document.querySelector('.choice-bird-2').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
  document.querySelector('.choice-bird-3').textContent = birdsData[roundNumber][2].name;
  document.querySelector('.choice-bird-3').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
  document.querySelector('.choice-bird-4').textContent = birdsData[roundNumber][3].name;
  document.querySelector('.choice-bird-4').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
  document.querySelector('.choice-bird-5').textContent = birdsData[roundNumber][4].name;
  document.querySelector('.choice-bird-5').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
  document.querySelector('.choice-bird-6').textContent = birdsData[roundNumber][5].name;
  document.querySelector('.choice-bird-6').insertAdjacentHTML('afterbegin', '<span class=" dote"></span>');
};

questionBird();

//выбор и проверка
let right = new Audio('/assets/vectorina/правильно.mp3')
let error = new Audio('/assets/vectorina/ошибка.mp3')
let choiceBird = document.querySelectorAll('.choice-bird-x');
let listenText = document.querySelector('.listen');
let roundscore = 5;
choiceBird.forEach((el) => {
  el.addEventListener('click', () => {
    listenText.classList.add('display')
    let selectedId = el.id - 1;
    findBird(selectedId);
    if (el.textContent == `${birdsData[roundNumber][roundBird].name}`) {
      el.firstChild.style.backgroundColor = 'green';
      displayBird();
      btnNext.removeAttribute('disabled');
      btnNext.style.opacity = 1;
      globalSourse = globalSourse + roundscore;
      headerScore.textContent = `Счет: ${globalSourse}`;
      right.play();
    } else {
      roundscore = roundscore - 1;
      el.firstChild.style.backgroundColor = 'red';
      error.play();
    }
  });
});

//слудующий раунд
let btnNext = document.querySelector('.btn');
btnNext.addEventListener('click', () => {
  roundNumber ++;
  categories[roundNumber].classList.add('done');
  btnNext.setAttribute('disabled', 'disabled');
  btnNext.style.opacity = 0.5;
  questionBird();
  roundscore = 5;
  roundBird = getRandomInt()
  listenText.classList.remove('display')
  clearBirdInfo()
})
