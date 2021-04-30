//computerPlay to return random choice of rock paper or scissor
    let option = ['rock','paper','scissor'];
    function computerPlay(option) {
        return option[Math.floor(Math.random() * option.length)];
    }

//function to play RPS with computer.
/* function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
     (playerSelection === 'paper' && computerSelection === 'scissor') ||
     (playerSelection === 'scissor' && computerSelection === 'rock')) {
        return 'You lose!';
    } else if ((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissor' && computerSelection === 'scissor')) {
        return 'Tie game!';
    } else {
        return 'You win!'
    }
}
const playerSelection='rock';
let computerSelection=computerPlay(option);
console.log(playRound(playerSelection,computerSelection));
*/

/*function game() to play 5 round game that keeps score and reports winner 
   or loser at the end */

function game() {
    let roundNumber = 0;
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection = prompt('rock paper or scissor');
    let computerSelection = computerPlay(option);

    function playRound(playerSelection, computerSelection) {
        playerSelection=playerSelection.toLowerCase();

        if ((playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissor') ||
            (playerSelection === 'scissor' && computerSelection === 'rock')) {
                computerScore+=1;
                return 'You lose!';
        } else if (playerSelection === computerSelection) {
            return 'Tie game!';
        } else if ((playerSelection === 'scissor' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
                playerScore+=1;
                return 'You win!';
        } else {
            alert('wrong input');
        }
    }
}
