// jQuery(document).ready(function($){

//     $('#coin').on('click', function(){
//       var flipResult = Math.random();
//       $('#coin').removeClass();
//       setTimeout(function(){
//         if(flipResult <= 0.5){
//           $('#coin').addClass('tails');
//           console.log('it is head');
//         }
//         else{
//           $('#coin').addClass('tails');
//           console.log('it is tails');
//         }
//       }, 3000);
//     });
//   });

// player class
// ui class
// computer class
// score object
// disable la butoane in timpu animatiei

//Choice buttons
const heads = document.querySelector("#heads");
const tails = document.querySelector("#tails");
const coin = document.querySelector("#coin");

// Player and computer scores
const playerScoreUI = document.querySelector("#playerPoints");
const computerScoreUI = document.querySelector("#computerPoints");

// PLayer class
class Player {
  constructor(score) {
    this.score = score;
  }
  addPoints() {
    this.score++;
  }
}

// player and computer
const player = new Player(0);
const computer = new Player(0);

// UI class
class UI {
  static flipCoin() {
    let flipResult = Math.random();
    coin.className = "";
    setTimeout(() => {
      if (flipResult <= 0.5) {
        coin.classList.add("heads");
      } else {
        coin.classList.add("tails");
      }
    }, 10);

    return flipResult;
  }
  static updateScore(playerScore, computerScore) {
    playerScoreUI.textContent = playerScore;
    computerScoreUI.textContent = computerScore;
    if (playerScore === 5) {
      document.querySelector("#title").textContent = "You win!";
      UI.resetGame();
      UI.disableButtons();
    }
    if (computerScore === 5) {
      document.querySelector("#title").textContent = "Computer wins!";
      UI.resetGame();
      UI.disableButtons();
    }
  }

  // Disable buttons
  static disableButtons() {
    heads.disabled = true;
    tails.disabled = true;
    setTimeout(() => {
      heads.disabled = false;
      tails.disabled = false;
    }, 3000);
  }
  static resetGame() {
    heads.disabled = true;
    tails.disabled = true;
    setTimeout(() => {
      player.score = 0;
      computer.score = 0;
      document.querySelector("#title").textContent =
        "First to 5 points wins the game!";
      document.querySelector("#playerChoice").textContent = "";
      document.querySelector("#computerChoice").textContent = "";
      playerScoreUI.textContent = 0;
      computerScoreUI.textContent = 0;
      heads.disabled = false;
      tails.disabled = false;
    }, 3000);
  }
}

// Choice class
class Choice {
  static heads() {
    document.querySelector("#playerChoice").textContent = "heads";
    document.querySelector("#computerChoice").textContent = "tails";
    let flip = UI.flipCoin();
    if (flip <= 0.5) flip = "heads";
    else flip = "tails";
    if ("heads" === flip) {
      player.addPoints();
    } else {
      computer.addPoints();
    }
    setTimeout(() => {
      UI.updateScore(player.score, computer.score);
    }, 3000);
    UI.disableButtons();
  }

  static tails() {
    document.querySelector("#playerChoice").textContent = "tails";
    document.querySelector("#computerChoice").textContent = "heads";
    let flip = UI.flipCoin();
    if (flip <= 0.5) flip = "heads";
    else flip = "tails";
    if ("tails" === flip) {
      player.addPoints();
    } else {
      computer.addPoints();
    }
    setTimeout(() => {
      UI.updateScore(player.score, computer.score);
    }, 3000);
    UI.disableButtons();
  }
}

// Choice functionality
heads.addEventListener("click", () => {
  Choice.heads();
});
tails.addEventListener("click", () => {
  Choice.tails();
});
