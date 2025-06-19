/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Initialize array of strings for each row
    let rows = new Array(numRows).fill('');
    let currentRow = 0;
    let step = 1; // 1 for moving down, -1 for moving up

    // Iterate through each character in the string
    for (let char of s) {
        rows[currentRow] += char;

        // Change direction if we hit the top or bottom row
        if (currentRow === 0) {
            step = 1; // Start moving down
        } else if (currentRow === numRows - 1) {
            step = -1; // Start moving up
        }

        currentRow += step;
    }

    // Concatenate all rows
    return rows.join('');
};