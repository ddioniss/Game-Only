const images = [
    'lemon.png',
    'watermelon.png',
    'cherry.png',
    'apricot.png',
    'pear.png'
];
let userName;
let attempts = 0;
let hasWon = false;
document.addEventListener("DOMContentLoaded", () => {
    userName = prompt("Введіть своє ім'я:");
    document.getElementById("user-name").textContent = userName || "Гравець";
    document.getElementById("spin-button").addEventListener("click", spinSlots);
});
function spinSlots() {
    if (attempts >= 3 || hasWon) {
        document.getElementById("result").textContent = hasWon ? "Ви виграли!" : "Спроби закінчились!";
        return;
    }
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`row${i}`).innerHTML = '';
    }
    let rows = [[], [], []];
    let usedImagesByColumn = [[], [], []];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let img = getRandomImage(usedImagesByColumn[col]);
            rows[row].push(img);
            document.getElementById(`row${row + 1}`).innerHTML += `<div class="slot"><img src="${img}" alt="icon" width="50" height="50"></div>`;
            usedImagesByColumn[col].push(img); 
        }
    }
    attempts++;
    checkWin(rows);
}
function getRandomImage(exclude = []) {
    let availableImages = images.filter(image => !exclude.includes(image));
    return availableImages[Math.floor(Math.random() * availableImages.length)];
}
function checkWin(rows) {
    for (let row of rows) {
        if (row[0] === row[1] && row[1] === row[2]) {
            hasWon = true;
            document.getElementById("result").textContent = "Ви виграли!";
            return;
        }
    }
    if (attempts === 3 && !hasWon) {
        document.getElementById("result").textContent = "Спроби закінчились! Спробуйте ще.";
    }
}


