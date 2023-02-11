




function getComputerChoice() {

    let computerOptions = ['rock', 'paper', 'scissor']
    let randomChoice = computerOptions [Math.floor(Math.random()*computerOptions.length)];
    if(randomChoice == computerOptions[0]) {
        return 0;
    }
    else if(randomChoice == computerOptions[1]) {
        return 1;
    }
    else {
        return 2;
    }

}



function getPlayerChoice() {

    let playerChoice = window.prompt("Choose your weapon!:") .toLowerCase();
    if(playerChoice === "rock") {
        return 0;
    }
    else if(playerChoice === "paper") {
        return 1;
    }
    else {
        return 2;
    }
}




function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection == 0 && computerSelection == 1) {
        console.log("You lose, Paper beats rock");
        return 01;
    }
    else if(playerSelection == 0 && computerSelection == 2) {
        console.log("You win ! Rock beats scissor !");
        return 10;
    }
    else if(playerSelection == 1 && computerSelection == 0) {
        console.log("You win ! Paper beats rock !");
        return 10;
    }
    else if(playerSelection == 1 && computerSelection == 2) {
        console.log("You lose, Scissor beats paper");
        return 01;
    }
    else if(playerSelection == 2 && computerSelection == 0) {
        console.log("You lose, Rock beats scissor");
        return 01;
    }
    else if(playerSelection == 2 && computerSelection == 1) {
        console.log("You win ! Scissor beats paper !");
        return 10;
    }
    else {
        console.log("Equal, play again");
        return 0;
    }

}



function game() {


    let singleScore = playRound(playerSelection, computerSelection);
    let playerScore
    let computerScore
    let winnerDeclaration



    for (let i = 0; i < 5; i++) {

        if(singleScore == 01) {
            computerScore = 1;
        }
        else if(singleScore == 10) {
            playerScore = 1;
        }
              
        return playerScore

        }

        console.log(playerScore);

        

        



    }

    





const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();





game();
