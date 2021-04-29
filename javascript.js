//computerPlay to return random choice of rock paper or scissor
    const option = ['rock','paper','scissor'];
    function computerPlay(option) {
        return option[Math.floor(Math.random() * option.length)];
    }
//player input via prompt of rock paper or scissor


//function to play RPS with computer.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    }
}
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
