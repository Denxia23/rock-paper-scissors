function getComputerSelection() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

function playRound(playerChoice,computerChoice) {
    let roundWinner;
    if (playerChoice === computerChoice) {
        roundWinner = "none";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        roundWinner = "player";
    } else if (playerChoice === "rock" && computerChoice === "paper"){
        roundWinner = "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        roundWinner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        roundWinner = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        roundWinner = "player";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        roundWinner = "computer";
    }
    return roundWinner; 
}

function Game() {
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;
    let gameWinner;
    for (let i = 0;i < 5;i++) {
        playerChoice = prompt("Your Selection").toLowerCase();
        computerChoice = getComputerSelection();
        roundWinner = playRound(playerChoice,computerChoice);
        switch(roundWinner) {
            case "player":
                console.log("You Win! " + playerChoice + " Beats " + computerChoice)
                playerScore++
                break;
            case "computer":
                console.log("You Lose! " + computerChoice + " Beats " + playerChoice)
                computerScore++
                break;
            case "none":
                console.log("It's a Tie!")
                break;
        }
    }
    if (playerScore > computerScore) {
        gameWinner = "player"
    } else {
        gameWinner = "computer"
    }
    console.log("The Winner is " + gameWinner)
}



