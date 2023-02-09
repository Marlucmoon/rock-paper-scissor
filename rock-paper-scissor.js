


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

    let playerChoice = window.prompt("Please choose:") .toLowerCase();
    return playerChoice;
}




function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection) {
        return "Equal, play again";
    }
    

    let compareChoices = ['rock', 'paper', 'scissor'];
    

    let phraseWinner
   
    function winnerDeclaration() {
        
     }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));



