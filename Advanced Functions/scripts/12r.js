let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();

// if(!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }

    return computerMove;
}

function updateScoreElement() {
    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
    autoPlay();
});
let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// }
function autoPlay() {
    if (!isAutoPlaying) {
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        playGame('rock');
    } else if (event.key === 'p' || event.key === 'P') {
        playGame('paper');
    } else if (event.key === 's' || event.key === 'S') {
        playGame('scissors');
    }
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

function playGame(move) {
    const computerMove = pickComputerMove();
    let result = "";

    if (move === "scissors") {
        if (computerMove === "rock") {
            result = "You lose.";
        } else if (computerMove === "paper") {
            result = "You win.";
        } else if (computerMove === "scissors") {
            result = "tie.";
        }
    } else if (move === "rock") {
        if (computerMove === "rock") {
            result = "tie.";
        } else if (computerMove === "paper") {
            result = "You lose.";
        } else if (computerMove === "scissors") {
            result = "You win.";
        }
    } else if (move === "paper") {
        if (computerMove === "rock") {
            result = "You win.";
        } else if (computerMove === "paper") {
            result = "tie.";
        } else if (computerMove === "scissors") {
            result = "You lose.";
        }
    }

    if (result === "You win.") {
        score.wins++;
    } else if (result === "You lose.") {
        score.losses++;
    } else if (result === "tie.") score.ties++;
    // only supports strings
    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(
        ".js-moves"
    ).innerHTML = `You <img src="images/${move}-emoji.png" class="move-icon" alt="${move}-emoji" /> <img src="images/${computerMove}-emoji.png" class="move-icon" alt="${computerMove}-emoji" /> Computer`;
}