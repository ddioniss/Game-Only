const cards = [
    {name: "6", value: 6, img: "six.jpg"},
    {name: "7", value: 7, img: "seven.png"},
    {name: "8", value: 8, img: "eight.jpg"},
	{name: "10", value: 10, img: "ten.jpg"},
	{name: "Jack", value: 2, img: "jack.png"},
	{name: "Queen", value: 3, img: "queen.jpg"},
    {name: "King", value: 4, img: "king.png"},
	{name: "Ace", value: 11, img: "ace.png"},
];
let userScore = 0;
let computerScore = 0;
let rounds = 0;
document.addEventListener("DOMContentLoaded", () => {
    const userName = prompt("Введіть своє ім'я:");
    document.getElementById("user-name").textContent = userName || "User";
    
    document.getElementById("generate-button").addEventListener("click", playRound);
});
function playRound() {
    if (rounds >= 3) {
        document.getElementById("result").textContent = determineWinner();
        return;
    }
    const userCard = getRandomCard();
    const computerCard = getRandomCard();
    document.getElementById("user-card").src = userCard.img;
    document.getElementById("computer-card").src = computerCard.img;
    userScore += userCard.value;
    computerScore += computerCard.value;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    rounds++;
    if (rounds === 3) {
        document.getElementById("result").textContent = determineWinner();
    }
}
function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}
function determineWinner() {
    if (userScore > computerScore) return "Ви виграли!";
    if (computerScore > userScore) return "God виграв!";
    return "Нічия!";
}

