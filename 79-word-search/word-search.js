/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row, col, index) => {
        // Check if current cell is out of bounds or already visited
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false;
        }

        // If the entire word is found
        if (index === word.length - 1) {
            return true;
        }

        // Mark the cell as visited
        const temp = board[row][col];
        board[row][col] = '*';

        // Explore adjacent cells
        const found =
            dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1);

        // Restore the cell
        board[row][col] = temp;

        return found;
    };

    // Iterate through the board to find the first character of the word
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
