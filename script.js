/*
code formatting in vs code = shift + alt + f

*/

var scores, roundScores, activePlayer, dice, gameplaying;

dice = Math.floor(Math.random() * 6 + 1);

console.log(dice);
init();
// document.querySelector('#current--'+activePlayer).textContent = dice;
// var x = document.querySelector('#score--0').textContent;
// console.log(x);

document.querySelector(".btn--roll").addEventListener("click", function btn() {
  if (gameplaying) {
    //1 random number
    dice = Math.floor(Math.random() * 6 + 1);
    //2 display number
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3 update the round score if rolled number was not 1
    if (dice !== 1) {
      //add score
      roundScores += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        roundScores;
    } else {
      //next player
      nextplayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gameplaying) {
    // add current score to the global score
    scores[activePlayer] += roundScores;

    // update the ui
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name--" + activePlayer).textContent =
        "winner !!";
      document.querySelector(".dice").style.display = "none";
      gameplaying = false;
    } else {
      // next player
      nextplayer();
    }
  }
});

function nextplayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active"); // chnging active player
  //document.querySelector('.player--0').classList.remove('player--active');
  //document.querySelector('.player--0').classList.remove('player--active');

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  gameplaying = true;

  document.querySelector(".dice").style.display = "none"; // changing css using selectoin...
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("name--0").textContent = "player 1";
  document.getElementById("name--1").textContent = "player 2";
}
