const prompt = require('prompt-sync')(); // This is a library

const ROWS = 5;
const COLS = 5;
const MAX_NUM = 25;

let currentPlayer = 1;
let player1Card;
let player2Card;

function startGame() {
  player1Card = createBingoCard();
  player2Card = createBingoCard();
  displayBingoCard(player1Card);
  console.log("\nPlayer 1's Turn");
  markNumbers();
}

function createBingoCard() {
  const card = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
  const usedNumbers = new Set();

  while (usedNumbers.size < ROWS * COLS) {
    const num = Math.floor(Math.random() * MAX_NUM) + 1;
    if (!usedNumbers.has(num)) {
      usedNumbers.add(num);
    }
  }

  const numbersList = Array.from(usedNumbers);
  numbersList.sort(() => Math.random() - 0.5);

  let index = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      card[i][j] = numbersList[index++];
    }
  }
  return card;
}

function displayBingoCard(card) {
  console.log("Bingo Card:");
  for (let i = 0; i < ROWS; i++) {
    let row = "";
    for (let j = 0; j < COLS; j++) {
      row += `${card[i][j]}\t`;
    }
    console.log(row);
  }
}

function markNumbers() {
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
      displayBingoCard(player1Card);
      displayBingoCard(player2Card);

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
    }
  }
}

function markNumber(card, number) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (card[i][j] === number) {
        card[i][j] = -1; // Marked number
        return true;
      }
    }
  }
  return false;
}

function checkWin(card) {
  // Check rows, columns, and diagonals for a Bingo pattern
  for (let i = 0; i < ROWS; i++) {
    let rowFilled = true;
    let colFilled = true;
    for (let j = 0; j < COLS; j++) {
      if (card[i][j] !== -1) {
        rowFilled = false;
      }
      if (card[j][i] !== -1) {
        colFilled = false;
      }
    }
    if (rowFilled || colFilled) {
      return true;
    }
  }

  // Check diagonals
  let diagonal1Filled = true;
  let diagonal2Filled = true;
  for (let i = 0; i < ROWS; i++) {
    if (card[i][i] !== -1) {
      diagonal1Filled = false;
    }
    if (card[i][COLS - 1 - i] !== -1) {
      diagonal2Filled = false;
    }
  }
  if (diagonal1Filled || diagonal2Filled) {
    return true;
  }

  return false;
}

startGame();
