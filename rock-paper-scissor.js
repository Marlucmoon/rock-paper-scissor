




function getComputerChoice() {

    
    let computerOptions = ['rock', 'paper', 'scissor']
    let randomChoice = computerOptions [Math.floor(Math.random()*computerOptions.length)];
    if(randomChoice === computerOptions[0])
        return 0;
    else if(randomChoice === computerOptions[1])
        return 1;
    else if(randomChoice === computerOptions[2])
        return 2;
    else
        return 3;

}



function getPlayerChoice() {

    let playerChoice = window.prompt("Choose your weapon!:") .toLowerCase();
    if(playerChoice === "rock")
        return 0;
    else if(playerChoice === "paper")
        return 1;
    else if(playerChoice === "scissor")
        return 2;
    else
        return 3;
}


function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
   
    if(playerSelection === 0 && computerSelection === 1) {
        console.log("You lose, Paper beats rock");
        let score = [0,1];
        return score;

    }
    else if(playerSelection === 0 && computerSelection === 2) {
        console.log("You win ! Rock beats scissor !");
        let score = [1,0];
        return score;
    }
    else if(playerSelection === 1 && computerSelection === 0) {
        console.log("You win ! Paper beats rock !");
        let score = [1,0];
        return score;
    }
    else if(playerSelection === 1 && computerSelection === 2) {
        console.log("You lose, Scissor beats paper");
        let score = [0,1];
        return score;
    }
    else if(playerSelection === 2 && computerSelection === 0) {
        console.log("You lose, Rock beats scissor");
        let score = [0,1];
        return score;
    }
    else if(playerSelection === 2 && computerSelection === 1) {
        console.log("You win ! Scissor beats paper !");
        let score = [1,0];
        return score;
    }
    else if(playerSelection === computerSelection) {
        console.log("Tie Game, try again !!");
        let score = [0,0];
        return score;
    }
    else {
        
        return -1;
    }

}



function game() {

   playerSelection = getPlayerChoice();
   computerSelection = getComputerChoice();
   playerSum = 0;
   computerSum = 0;

    for(let i = 0; i < 5; i++) {

        
        let score = playRound(playerSelection, computerSelection);

        if(score[0] == 0 && score[1] == 1) {
            computerSum = computerSum + 1;
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else if(score[0] == 1 && score[1] == 0) {
            playerSum = playerSum + 1;
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else if(score[0] == score[1]) {
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else {
            console.log("nazz");
        }
    }
  
    if(playerSum > computerSum) {
        console.log("---- YOU WIN !!! ----");
    }
    else if(playerSum < computerSum) {
        console.log("---- YOU LOSE. ----");
    }
    else if(playerSum == computerSum) {
        console.log("---- EQUAL, PLAY AGAIN FUCKERS ! ----");
    }
    else {
        console.log("Chelou");
    }

} 

/**
rock, rock, scissor, paper, scissor
*/

game();









