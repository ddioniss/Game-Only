let playerName;
let playerScore = 0;
let computerScore = 0;
document.getElementById('startGame').onclick = function() {
    playerName = document.getElementById('playerName').value || 'Гравець';
    startRound();
};
function startRound() {
    const playerNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;
    let resultText;
    if (playerNumber > computerNumber) {
        playerScore++;
        resultText = `<span class="highlight">${playerName} виграв(-ла) раунд!</span> <span class="number">(${playerNumber} > ${computerNumber})</span>`;
    } else if (computerNumber > playerNumber) {
        computerScore++;
        resultText = `<span class="lose">Комп'ютер виграв раунд!</span> <span class="number">(${computerNumber} > ${playerNumber})</span>`;
    } else {
        resultText = `Нічия! <span class="number">(${playerNumber} = ${computerNumber})</span>`;
    }
    updateScoreboard(resultText);
    checkForWinner();
}
function updateScoreboard(resultText) {
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('playerScore').innerText = `Ваш бал: ${playerScore}`;
    document.getElementById('computerScore').innerText = `Бал комп'ютера: ${computerScore}`;
}
function checkForWinner() {
    if (playerScore === 3) {
        alert(`${playerName} виграв(-ла) гру!`);
        resetGame();
    } else if (computerScore === 3) {
        alert(`Комп'ютер виграв гру!`);
        resetGame();
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('playerScore').innerText = `Ваш бал: 0`;
    document.getElementById('computerScore').innerText = `Бал комп'ютера: 0`;
}
