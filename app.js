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
  cSelectionImg.src = `images/${computerChoice}.png`;
  pSelectionDiv.appendChild(pSelectionImg);
  cSelectionDiv.appendChild(cSelectionImg);  

  let roundWinner = playRound(playerChoice, computerChoice);
  switch (roundWinner) {
    case "player":
      console.log("You Win! " + playerChoice + " Beats " + computerChoice);
      playerScore++;
      cSelectionDiv.classList.add("lose");
      pScore.innerText = playerScore;
      break;
    case "computer":
      console.log("You Lose! " + computerChoice + " Beats " + playerChoice);
      computerScore++;
      pSelectionDiv.classList.add("lose");
      cScore.innerText = computerScore;
      break;
    case "none":
      console.log("It's a Tie!");
      pSelectionDiv.classList.add("lose");
      cSelectionDiv.classList.add("lose");
      break;
  };
  roundNum++;
  round.innerText = `Round ${roundNum}`;
  roundSect.addEventListener("transitionend", removeTransitionClass);
  
  if (playerScore === 5 || computerScore === 5) {
    gameEnd();
  };
};


function gameEnd() {
  let messages = ["You Won, congratulations!", "You lost, better luck next time!"]
  selectionSect.classList.add("fadeOut");
  if (playerScore > computerScore) {
    endMsg.innerText = messages[0];
  } else {
    endMsg.innerText = messages[1];
  };
  gameEndSect.classList.add("transition");


};

function removeTransitionClass(e) {
  if (e.propertyName !== "transform") return;
  roundSect.classList.remove("transition");
  selectionSect.classList.remove("transition");
  pSelectionDiv.classList.remove("lose");
  cSelectionDiv.classList.remove("lose");
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
const gameSect = document.querySelector("#game");
const round = document.querySelector("#game-info .round");
const circles = document.querySelector("#game-intro .circles");
const selectionSect = document.querySelector("#game #selection");
const roundSect = document.querySelector("#game #round");
const pSelectionImg = document.createElement("img");
const cSelectionImg = document.createElement("img");
const pSelectionDiv = document.querySelector("#game #round .player-selection");
const cSelectionDiv = document.querySelector("#game #round .cpu-selection");
const wave = document.querySelector("#game-intro .wave");
const endMsg = document.querySelector("#game #game-end .end-msg");
const gameEndSect = document.querySelector("#game #game-end");

function main() {
  console.log(playerScore);
  playButton.addEventListener("click", () => {
    textDiv.classList.add("transition");
    gameSect.classList.add("transition");
    circles.classList.add("transition");
    wave.classList.add("transition");
  });

  circles.addEventListener("transitionend", () => {
    circles.replaceChildren();
  });
  
  rockDiv.addEventListener("click", () => {
    selectionSect.classList.add("transition");
    roundSect.classList.add("transition");
    pSelectionImg.src = "images/rock.png"
    game(rockDiv.getAttribute("id"));

  });
  paperDiv.addEventListener("click", () => {
    selectionSect.classList.add("transition");
    roundSect.classList.add("transition");
    pSelectionImg.src = "images/paper.png"
    game(paperDiv.getAttribute("id"));
  });
  scissorsDiv.addEventListener("click", () => {
    selectionSect.classList.add("transition");
    roundSect.classList.add("transition");
    pSelectionImg.src = "images/scissors.png"
    game(scissorsDiv.getAttribute("id"));
  });

};

main();
