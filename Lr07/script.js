const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.background = 'linear-gradient(to right, #ff69b4, #da70d6, #8a2be2)';
container.style.margin = '0';
container.style.padding = '0';
container.style.textAlign = 'center';

const heading = document.createElement('h1');
heading.textContent = 'Чи вийде здати сесію?';
heading.style.color = '#ffffff';
heading.style.fontSize = '40px';
heading.style.marginBottom = '40px';

const magicBall = document.createElement('div');
magicBall.style.width = '500px';
magicBall.style.height = '500px';
magicBall.style.borderRadius = '50%';
magicBall.style.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
magicBall.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)';
magicBall.style.display = 'flex';
magicBall.style.justifyContent = 'center';
magicBall.style.alignItems = 'center';
magicBall.style.cursor = 'pointer';
magicBall.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

const answerElement = document.createElement('span');
answerElement.style.fontSize = '40px';
answerElement.style.color = '#fff';
answerElement.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.7)';
answerElement.style.fontFamily = 'Arial, sans-serif';
answerElement.textContent = '';

magicBall.appendChild(answerElement);
const answers = ["Так", "Ні", "Можливо", "Запитай знову", "Однозначно так", "Невідомо"];
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}
let isAnswered = false;
magicBall.addEventListener('click', () => {
    if (!isAnswered) {
        const randomAnswer = getRandomAnswer();
        answerElement.textContent = randomAnswer;
        isAnswered = true;
        magicBall.style.boxShadow = '0 0 60px rgba(0, 255, 255, 0.7), inset 0 0 60px rgba(255, 255, 255, 0.3)';
        setTimeout(() => {
            isAnswered = false;
            answerElement.textContent = '';
            magicBall.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)';
        }, 3000);
    }
});
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const size = screenWidth < 600 ? '450px' : '500px';
    magicBall.style.width = size;
    magicBall.style.height = size;
});
container.appendChild(heading);
container.appendChild(magicBall);
document.body.appendChild(container);
