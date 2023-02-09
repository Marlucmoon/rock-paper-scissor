

function getComputerChoice(computerChoice) {

    let options = ['rock', 'paper', 'scissor']
    computerChoice = options [Math.floor(Math.random()*options.length)];
    return computerChoice;
}

let phraseWinner = "You win ! ";
let phraseLoser = "You lose ! ";

function winner(DeclarationPhrase) {
    
    
    DeclarationPhrase = [phraseWinner + getComputerChoice()];
    return DeclarationPhrase;
}

console.log(winner());




/*

function getPlayerChoice(playerChoice) {

    playerChoice = window.prompt("Please choose:") .toLowerCase();
    return playerChoice;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(play)



/*


function getComputerChoice(computerChoice) {
   
    let options = ['rock', 'paper', 'scissor'];
    let optionsRandom = options [Math.floor(Math.random()*options.length)];
    if(optionsRandom == options[0]) {
        computerChoice = 0;
        return options[0];
    }
    else if(optionsRandom == options[1]) {
        computerChoice = 1;
        return options[1];
    }
    else {
        computerChoice = 2;
        return options[2];
    }
    
}



/*

function playRound(playerSelection, computerSelection) {
return playerSelection;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

/*
Game() {

    for (let i = 0; i < 5; i++) {

    }
}
*/

