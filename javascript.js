//computerPlay to return random choice of rock paper or scissor
    const option = ['rock','paper','scissor'];
    function computerPlay(option) {
        return option[Math.floor(Math.random() * option.length)];
    }

//function to play RPS with computer.
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
     (playerSelection == 'paper' && computerSelection == 'scissor') ||
     (playerSelection == 'scissor' && computerSelection == 'rock')) {
        return 'You lose!';
    } else if ((playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'scissor' && computerSelection == 'scissor')) {
        return 'Tie game';
    } else {
        return 'You win!'
    }
}
const playerSelection='rock';
let computerSelection=computerPlay(option);

/*function game() to play 5 round game that keeps score and reports winner 
   or loser at the end */



/*  function playRound(playerSelection,computerSelection) {
      if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
           (playerSelection === 'scissor' && computerSelection === 'paper') ||
           (playerSelection === 'paper' && computerSelection === 'rock')) {
               alert('WINNER!');
    } else if ((playerSelection === 'rock' && computerSelction ==='rock') ||
            (playerSelection ==='paper' && computerSelection ==='paper') ||
            (playerSelection ==='scissor' && computerSelection ==='scissor')){
                alert('TIE GAME');
    } else {
        alert('You lost!');
    }
  }*/
