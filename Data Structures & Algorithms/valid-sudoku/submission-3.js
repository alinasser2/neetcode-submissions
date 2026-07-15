class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) 
    {
        // Validate rows
        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[row][i] === '.') continue;
                if (seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }

        // Validate columns
        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[i][col] === '.') continue;
                if (seen.has(board[i][col])) return false;
                seen.add(board[i][col]);
            }
        }

        // Validate 3x3 blocks
        for (let square = 0; square < 9; square++) {   
            let buffer = new Set();

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {

                    let currentRow = Math.floor(square / 3) * 3 + i;
                    let currentCol = (square % 3) * 3 + j;

                    if (board[currentRow][currentCol] === '.') continue;
                    if (buffer.has(board[currentRow][currentCol])) return false;
                    buffer.add(board[currentRow][currentCol]);
                }
            }
        }

        return true;
    }
}
