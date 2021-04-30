//computerPlay to return random choice of rock paper or scissor
//return random value for computer choice in game of RPS.
    let option = ['rock','paper','scissor'];
    function computerPlay() {
        return option[Math.floor(Math.random() * option.length)];
}
//how to determine winner of each game.
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {
            computerScore++;
            alert('You lose!');
            return 'You lose!';

     } else if ((playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore++;
            alert('You win!')
            return 'You win!';
    } 
        else if (playerSelection === computerSelection) {
            alert('Tie game!')
            return 'Tie game!';

    }   else {
            return('wrong input');
    }
}
// Who is winner function
function whoWon () {
    if (playerScore > computerScore) {
        alert('You are the ultimate winner!');

    }else if (playerScore < computerScore){
        alert('You have ultimately lost!');
    
    }else {
        alert('Tie game!');
    }
}

// Function game
function game() {
    let playerSelection = prompt('rock paper or scissor'); //Asking user for their decision.
    let computerSelection = computerPlay(); // test if 'option' is required in parenthesis
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
        playerSelection = prompt('please choose rock paper or scissor');
    }
    console.log(playRound(playerSelection,computerSelection));
}

// loop function to play 5 round game.
let play = true
while (play===true) {
    for (i=1; i<6; i++) {
        alert('round' + ' ' +i);
        game();
    }
    whoWon()
}