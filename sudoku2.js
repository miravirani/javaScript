function valideteSudoku(arr){
    const colCheck = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const rowCheck = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const gridCheck = new Array(9).fill(0).map(() => new Array(9).fill(0));

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            const number = arr[i][j];

            let support = (rowCheck[i][number -1] === 0)?(rowCheck[i][number - 1] += 1):false;
            if(support == false) return false;

            support = (colCheck[j][number - 1] === 0)?(colCheck[j][number - 1] += 1):false;
            if(support == false) return false;

            const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            support = (gridCheck[k][number - 1] === 0)?(gridCheck[k][number - 1] += 1):false;
            if(support == false) return false;
        }
    }
    return true;
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
if(valideteSudoku(sudoku)){
    console.log("sudoku is valid");
}
else{
    console.log("sudoku is not valid");
}