function getComputerSelection() {
  let choices = ["rock","paper","scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
};

function playRound(playerChoice, computerChoice) {
  let roundWinner;
  if (playerChoice === computerChoice) {
    roundWinner = "none";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    roundWinner = "player";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    roundWinner = "computer";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    roundWinner = "player";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    roundWinner = "computer";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    roundWinner = "player";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    roundWinner = "computer";
  };
  return roundWinner;
};

function game(playerChoice) {
  let computerChoice = getComputerSelection();
  let roundWinner = playRound(playerChoice, computerChoice);
  
  switch (roundWinner) {
    case "player":
      console.log("You Win! " + playerChoice + " Beats " + computerChoice);
      playerScore++;
      pScore.innerText = playerScore;
      break;
    case "computer":
      console.log("You Lose! " + computerChoice + " Beats " + playerChoice);
      computerScore++;
      cScore.innerText = computerScore;
      break;
    case "none":
      console.log("It's a Tie!");
      break;
  };
  roundNum++;
  round.innerText = `Round ${roundNum}`;
};

function removeTransitionClass(e) {
  this.classList.remove("transition");
};


let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
const rockDiv = document.querySelector("#selection #rock");
const paperDiv = document.querySelector("#selection #paper");
const scissorsDiv = document.querySelector("#selection #scissors");
const pScore = document.querySelector("#game-info #p-points");
const cScore = document.querySelector("#game-info #c-points");
const playButton = document.querySelector("#game-intro .play-btn");
const textDiv = document.querySelector("#game-intro .text");
const gameSection = document.querySelector("#game");
const round = document.querySelector("#game-info .round");
const circles = document.querySelector("#game-intro .circles");




function main() {
  playButton.addEventListener("click", () => {
    textDiv.classList.add("transition");
    gameSection.classList.add("transition");
    circles.classList.add("transition");
  });
  
  rockDiv.addEventListener("click", () => {
    game(rockDiv.getAttribute("id"));
  });
  paperDiv.addEventListener("click", () => {
    game(paperDiv.getAttribute("id"));
  });
  scissorsDiv.addEventListener("click", () => {
    game(scissorsDiv.getAttribute("id"));
  });


  if (playerScore > computerScore) {
    let gameWinner = "player";
  } else {
    let gameWinner = "computer";
  };
};



main();
