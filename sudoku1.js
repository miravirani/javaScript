function isValidRow(grid, row) {
    let seen = new Array(10).fill(false)
    for (let col = 0; col < 9; col++) {
        let num = grid[row][col]

        if (num !== 0) {
            if (seen[num]) {
                return false
            } else {
                seen[num] = true;
            }
        }
    }
    return true
}

function isValidColumn(grid, col) {
    let seen = new Array(10).fill(false)
    for (let row = 0; row < 9; row++) {
        let num = grid[row][col]
        
        if (num !== 0) {
            if (seen[num]) {
                return false
            } else {
                seen[num] = true;
            }
        }
    }
    return true
}

const sudoku = [
    [1, 2, 3, 9, 8, 7, 6, 5, 4],
    [6, 5, 4, 1, 2, 3, 9, 8, 7],
    [7, 8, 9, 6, 5, 4, 1, 2, 3],
    [2, 3, 1, 8, 7, 9, 5, 4, 6],
    [5, 4, 6, 2, 3, 1, 8, 7, 9],
    [8, 9, 7, 5, 4, 6, 2, 3, 1],
    [3, 1, 2, 7, 9, 8, 4, 6, 5],
    [4, 6, 5, 3, 1, 2, 7, 9, 8],
    [9, 7, 8, 4, 6, 5, 3, 1, 2]
]

let isValidSudoku = true;
for (let row = 0; row < 9; row++) {
    if (!isValidRow(sudoku, row)) {
        isValidSudoku = false;
        break;
    }
}

for (let col = 0; col < 9; col++) {
    if (!isValidColumn(sudoku, col)) {
        isValidSudoku = false;
        break;
    }
}

if (isValidSudoku) {
    console.log("The Sudoku is valid.");
} else {
    console.log("The Sudoku is not valid.");
}