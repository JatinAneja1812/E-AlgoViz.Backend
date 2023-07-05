let walls;
export function buildHorizontalMaze(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let vertical = range(grid[0].length);
  let horizontal = range(grid.length);
  walls = [];
  getHorizontalWalls(grid, vertical, horizontal, startNode, finishNode);
  return walls;
}

function range(len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(i);
  }
  return result;
}

function getHorizontalWalls(grid, vertical, horizontal, startNode, finishNode) {
  if (horizontal.length < 2) {
    return;
  }

  let choice = Math.floor(Math.random() * 2);
  for (let num of horizontal) {
    if (choice === 0 && num % 2 !== 0) {
      addWall(grid, num, vertical, startNode, finishNode);
    }
    if (choice === 1 && num % 2 === 0) {
      addWall(grid, num, vertical, startNode, finishNode);
    }
  }
}

function addWall(grid, num, vertical, startNode, finishNode) {
  let isStartFinish = false;
  let tempWalls = [];
  for (let temp of vertical) {
    if (
      (num === startNode.row && temp === startNode.col) ||
      (num === finishNode.row && temp === finishNode.col)
    ) {
      isStartFinish = true;
      continue;
    }
    tempWalls.push(grid[num][temp]);
  }
  if (!isStartFinish) {
    tempWalls.splice(Math.floor(Math.random() * tempWalls.length), 1);
  }
  for (let wall of tempWalls) {
    walls.push(wall);
  }
}

export function HorizontalMaze(grid) {

    walls = buildHorizontalMaze(grid, grid[0][0], grid[1][1]);
    return walls;
  }