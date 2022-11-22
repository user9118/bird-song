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
function clearBirdInfo() {
  selectedBirdFoto.style.backgroundImage = `none`
  selectedBirdName.textContent = '';
  selectedBirdSecondName.textContent = '';
  selectedBirdText.textContent = '';
  selectedBirdAudio.setAttribute('src', ``);
  selectedBirdAudio.classList.add('display')
}

//round start
let roundBird = getRandomInt();
let questionBird = function () {
  roundFoto.style.backgroundImage = `url('../assets/vectorina/bird.jpg')`;
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
let right = new Audio('../assets/vectorina/right.mp3')
let error = new Audio('../assets/vectorina/eror.mp3')
let choiceBird = document.querySelectorAll('.choice-bird-x');
let listenText = document.querySelector('.listen');
let roundscore = 5;
let roundDone = false;
let btnNext = document.querySelector('.btn');

choiceBird.forEach((el) => {
  el.addEventListener('click', () => {
    let selectedId = el.id - 1;
    listenText.classList.add('display')
    findBird(selectedId);
    if (roundDone == true) {
    } else if (roundDone == false) {
      if (el.textContent != `${birdsData[roundNumber][roundBird].name}` && el.classList.contains('answed')) {
      } else if(el.textContent != `${birdsData[roundNumber][roundBird].name}`) {
        el.classList.add('answed');
        roundscore = roundscore - 1;
        el.firstChild.style.backgroundColor = 'red';
        error.play();
      } else {
        displayBird();
        el.firstChild.style.backgroundColor = 'green';
        btnNext.removeAttribute('disabled');
        btnNext.style.opacity = 1;
        globalSourse = globalSourse + roundscore;
        headerScore.textContent = `Счет: ${globalSourse}`;
        right.play();
        roundAudio.pause();
        roundDone = true;
      };
    };
  });
});

//слудующий раунд
function nextRound() {
  categories[roundNumber].classList.add('done');
  btnNext.setAttribute('disabled', 'disabled');
  btnNext.style.opacity = 0.5;
  roundscore = 5;
  roundBird = getRandomInt();
  listenText.classList.remove('display');
  questionBird();
  clearBirdInfo();
  choiceBird.forEach((el) => {
    el.classList.remove('answed');
  });
}
let main = document.querySelector('.main');
let soursePage = document.querySelector('.sourse-game');

btnNext.addEventListener ('click', () => {
  roundNumber ++;
  roundDone = false;
  console.log(roundNumber);
  if(roundNumber < 5) {
    nextRound();
  } else if (roundNumber == 5) {
    nextRound();
    btnNext.textContent = 'Посмотреть счёт';
  } else if (roundNumber == 6) {
    main.classList.add('display')
    console.log();
    soursePage.classList.remove('display');
    document.querySelector('.sourse-game-attempt').textContent = `${globalSourse}`
    if (globalSourse == 30) {
      document.querySelector('.btn-new_game').classList.add('display')
      document.querySelector('.sourse-praise').classList.remove('display')
    }
  }
})