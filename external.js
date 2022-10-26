
function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function play(playerSelection, computerSelection ){
    let winner;
    // playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 'tie';
    }
    if((playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')||
        (playerSelection == 'rock' && computerSelection == 'scissor')){
            return winner = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    else if((playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissor' && computerSelection == 'paper')||
            (playerSelection == 'rock' && computerSelection == 'scissor')){
            return winner = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

}

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Rock Paper Scissor");
        let computerChoice = getComputerChoice();
        console.log(play(playerChoice, computerChoice));
    }
}
game();