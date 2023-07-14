export function spiral(grid) {
    const nodesToAnimate = [];

    let firstRow = 0;
    let lastRow = grid.length - 1;
    let firstCol = 0;
    let lastCol = grid[0].length - 1;

    while (lastRow - firstRow > 2 && lastCol - firstRow > 2) {
        for (let col = firstCol; col < lastCol; col++) {
            nodesToAnimate.push(grid[firstRow][col]);
        }
        for (let row = firstRow; row < lastRow; row++) {
            nodesToAnimate.push(grid[row][lastCol]);
        }
        for (let col = lastCol; col > firstCol; col--) {
            nodesToAnimate.push(grid[lastRow][col]);
        }
        for (let row = lastRow; row > firstRow + 1; row--) {
            nodesToAnimate.push(grid[row][firstCol]);
        }

        nodesToAnimate.push(grid[firstRow + 2][lastCol]);
        nodesToAnimate.push(grid[firstRow + 2][firstCol]);
        firstRow += 2;
        lastRow -= 2;
        firstCol += 2;
        lastCol -= 2;
    }

    return nodesToAnimate;
}