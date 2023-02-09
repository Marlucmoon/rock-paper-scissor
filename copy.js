

function game() {

    for (let i = 0; i < 5; i++) {

    }
}



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