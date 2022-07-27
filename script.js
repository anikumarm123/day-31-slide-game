var start_btn = document.getElementById('start');
start_btn.addEventListener('click', fun);

var change = document.querySelectorAll('.same');

var trice = 0;

function fun() {

  trice += 1;

  var arry = ['A', 'N', 'C', 'D', 'E'];

  var newarry = [];

  for (i = 0; i < arry.length; i++) {

    while (newarry.length < 5) {

      var stored = parseInt(Math.random() * arry.length);

      if (!(newarry.includes(arry[stored]))) {
        newarry[i] = arry[stored];

        break;
      }
    }
    change[i].innerHTML = newarry[i];
  }

}

var okBtn = document.querySelector('.ok');

okBtn.addEventListener('click', wordfun);

var show_word = document.querySelector('.show-word');

var score_element = document.querySelector('.score');

var score = 0;

var wordArray = [];

function wordfun() {

  var typeWords = document.querySelector('.type-word');

  var type_val = typeWords.value;

  var words = ['and', 'end', 'can', 'ad', 'an', 'dance', 'dean', 'caned'];

  

  for (i = 0; i < words.length; i++) {

    if (!(wordArray.includes(words[i]))) {

      if (type_val == words[i]) {

        show_word.innerHTML += words[i] + '<br>';

        wordArray.push(words[i]);
        console.log(wordArray);
        score += 2;

        score_element.innerHTML = 'Score : ' + score;
      
      }
    }
    else {

      typeWords.value = 'Already Existed';

    }
  }

  typeWords.value = '';
}

var gameOver = document.querySelector('.end');

gameOver.addEventListener('click',endfun);

var trice_using =  document.querySelector('.trice');

function endfun(){

  trice_using.textContent = ' Your Trice :' +trice;

  score_element.textContent = ' Your Score :'+ score;

  show_word.innerHTML = '';  

}



