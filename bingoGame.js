const prompt = require('prompt-sync')();

const MAX_NUM = 25;
const rows = 5;
const cols = 5;

function randomNumber(exclude) {
    let num;
    do {
        num = Math.floor(Math.random() * 25) + 1;
    } while (exclude.includes(num));
    return num;
}

function generateCard(rows, cols) {
    const bingo = [];
    const usedNumbers = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const num = randomNumber(usedNumbers);
            row.push(num);
            usedNumbers.push(num);
        }
        bingo.push(row);
    }
    return bingo;
}

function displayCard(card) {
    for (let i = 0; i < card.length; i++) {
        console.log(card[i].join("\t"));
    }
}

function checkWin(card) {

}

function startGame() {
    let currentPlayer = 1;

    const player1Card = generateCard(rows, cols);
    const player2Card = generateCard(rows, cols);

    console.log("Player 1's Card:");
    displayCard(player1Card);
    console.log("\nPlayer 2's Card:");
    displayCard(player2Card);

    markNumbers(player1Card, player2Card, currentPlayer);
}
function markNumbers(player1Card, player2Card, currentPlayer) {
    let numbersMarked = 0;
    while (numbersMarked < MAX_NUM) {
        const number = parseInt(prompt("Enter a number (1-25): "));
        if (isNaN(number) || number < 1 || number > MAX_NUM) {
            console.log("Please enter a valid number between 1 and 25.");
            continue;
        }
        const marked1 = markNumber(player1Card, number);
        const marked2 = markNumber(player2Card, number);
        if (!marked1 && !marked2) {
            console.log("Number already marked or not found on any player card.");
        } else {
            numbersMarked++;
            // displayCard(player1Card);
            // displayCard(player2Card);
            if (checkWin(player1Card)) {
                console.log("Player 1 has won the game!");
                break;
            } else if (checkWin(player2Card)) {
                console.log("Player 2 has won the game!");
                break;
            } else {
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                console.log(`\nPlayer ${currentPlayer}'s Turn`);
            }
            numbersMarked++;
        }
    }
}
    function markNumber(card, number) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (card[i][j] === number) {
                    card[i][j] = -1;
                    return true;
                }
            }
        }
        return false;
    }
    startGame();
