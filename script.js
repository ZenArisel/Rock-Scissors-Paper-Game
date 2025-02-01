// Handle player choice when clicking an image
document.getElementById('rock').addEventListener('click', () => playGame('Rock'));
document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));
document.getElementById('paper').addEventListener('click', () => playGame('Paper'));

// Function to play the game
function playGame(playerChoice) {
    // Available choices for the computer
    const choices = ['Rock', 'Scissors', 'Paper'];
    
    // Random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Show the computer's choice
    console.log(`Computer chose: ${computerChoice}`);
    
    // Compare the choices and display the result
    const resultText = document.getElementById('resultText');
    
    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a tie! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}
