// Class that holds the score of each player
class Player {
  constructor(score) {
    this.score = score;
  }
}
// The two players
const player = new Player(0);
const computer = new Player(0);

// UI class
class UI {
  static showPlayerChoice(choice) {
    if (choice === 0) {
      document.querySelector(
        "#playerChoice"
      ).innerHTML = `<i class="fa-regular fa-hand-back-fist fa-2x"></i>`;
    }
    if (choice === 1) {
      document.querySelector(
        "#playerChoice"
      ).innerHTML = `<i class="fa-regular fa-hand fa-2x"></i>`;
    }
    if (choice === 2) {
      document.querySelector(
        "#playerChoice"
      ).innerHTML = `<i class="fa-regular fa-hand-scissors fa-2x"></i>`;
    }
  }

  static showComputerPick(playerChoice) {
    const appendComputerChoice = document.querySelector("#computerChoice");
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      appendComputerChoice.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-2x"></i>`;
    }
    if (computerChoice === 1) {
      appendComputerChoice.innerHTML = `<i class="fa-regular fa-hand fa-2x"></i>`;
    }
    if (computerChoice === 2) {
      appendComputerChoice.innerHTML = `<i class="fa-regular fa-hand-scissors fa-2x"></i>`;
    }
    if (playerChoice === computerChoice) UI.tie();
    if (playerChoice === 0 && computerChoice === 1) UI.computerWins();
    if (playerChoice === 1 && computerChoice === 2) UI.computerWins();
    if (playerChoice === 2 && computerChoice === 0) UI.computerWins();
    if (playerChoice === 0 && computerChoice === 2) UI.playerWins();
    if (playerChoice === 1 && computerChoice === 0) UI.playerWins();
    if (playerChoice === 2 && computerChoice === 1) UI.playerWins();
  }
  static tie() {
    document.querySelector("#change").textContent = "This round was a";
    document.querySelector("#winner").textContent = "TIE";
    // document.querySelector("#playerChoice").innerHTML = "";
    // document.querySelector("#computerChoice").innerHTML = "";
  }
  static playerWins() {
    document.querySelector("#change").textContent = "This round was won by";
    document.querySelector("#winner").textContent = "PLAYER";
    document.querySelector("#playerScore").textContent =
      parseInt(document.querySelector("#playerScore").textContent) + 1;
    if (document.querySelector("#playerScore").textContent == 3) {
      document.querySelector("#change").textContent = "This game was won by";
      document.querySelector("#winner").textContent = "PLAYER";
      UI.resetGame();
    }
  }
  static computerWins() {
    document.querySelector("#change").textContent = "This round was won by";
    document.querySelector("#winner").textContent = "COMPUTER";
    document.querySelector("#computerScore").textContent =
      parseInt(document.querySelector("#computerScore").textContent) + 1;
    if (document.querySelector("#computerScore").textContent == 3) {
      document.querySelector("#change").textContent = "This game was won by";
      document.querySelector("#winner").textContent = "COMPUTER";
      UI.resetGame();
    }
  }
  static resetGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    document.querySelector("#playerChoice").innerHTML = "";
    document.querySelector("#computerChoice").innerHTML = "";
    document.querySelector("#playerScore").textContent = 0;
    document.querySelector("#computerScore").textContent = 0;
    setTimeout(() => {
      rock.disabled = false;
      paper.disabled = false;
      scissors.disabled = false;
      document.querySelector("#change").textContent = "This round was won by";
      document.querySelector("#winner").textContent = "";
    }, 3000);
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {
  UI.showPlayerChoice(0);
  UI.showComputerPick(0);
});
paper.addEventListener("click", () => {
  UI.showPlayerChoice(1);
  UI.showComputerPick(1);
});
scissors.addEventListener("click", () => {
  UI.showPlayerChoice(2);
  UI.showComputerPick(2);
});
