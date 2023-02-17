




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
        getPlayerChoice();
}


function playRound(playerSelection, computerSelection) {
   
    if(playerSelection === 0 && computerSelection === 1) {
        console.log("You lose, Paper beats rock");
        return [0,1];
    }
    else if(playerSelection === 0 && computerSelection === 2) {
        console.log("You win ! Rock beats scissor !");
        return [1,0];
    }
    else if(playerSelection === 1 && computerSelection === 0) {
        console.log("You win ! Paper beats rock !");
        return [1,0];
    }
    else if(playerSelection === 1 && computerSelection === 2) {
        console.log("You lose, Scissor beats paper");
        return [0,1];
    }
    else if(playerSelection === 2 && computerSelection === 0) {
        console.log("You lose, Rock beats scissor");
        return [0,1];
    }
    else if(playerSelection === 2 && computerSelection === 1) {
        console.log("You win ! Scissor beats paper !");
        return [1,0]
    }
    else if(playerSelection === computerSelection) {
        console.log("Tie Game, try again !!");
        return [0,0];
    }
    else
        return -1;
}


function game() {
   let playerSum = 0;
   let computerSum = 0;

    for(let i = 0; i < 5; i++) {

        score = playRound(getPlayerChoice(), getComputerChoice());
        
        if(score[0] == 0 && score[1] == 1) {
            computerSum++;
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else if(score[0] == 1 && score[1] == 0) {
            playerSum++;
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else if(score[0] == score[1]) {
            console.log("player "+playerSum+"-"+computerSum+" computer");
        }
        else
            console.log("nazz");
    }

    if(playerSum > computerSum)
        console.log("---- YOU WIN !!! ----");
    else if(playerSum < computerSum)
        console.log("---- YOU LOSE. ----");
    else if(playerSum == computerSum)
        console.log("---- EQUAL, PLAY AGAIN FUCKERS ! ----");
    else
        console.log("Chelou");
} 

game();










