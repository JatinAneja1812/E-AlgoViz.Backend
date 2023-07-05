let walls = [];
export function buildVerticalMaze(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let vertical = range(grid[0].length);
  let horizontal = range(grid.length);

  getVerticalWalls(grid, vertical, horizontal, startNode, finishNode);
  return walls;
}

function range(len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(i);
  }
  return result;
}

function getVerticalWalls(grid, vertical, horizontal, startNode, finishNode) {
  if (vertical.length < 2) {
    return;
  }

  let choice = Math.floor(Math.random() * 2);
  for (let num of vertical) {
    if (choice === 0 && num % 2 !== 0) {
      addWall(grid, num, horizontal, startNode, finishNode);
    }
    if (choice === 1 && num % 2 === 0) {
      addWall(grid, num, horizontal, startNode, finishNode);
    }
  }
}

function addWall(grid, num, horizontal, startNode, finishNode) {
  let isStartFinish = false;
  let tempWalls = [];
  for (let temp of horizontal) {
    if (
      (temp === startNode.row && num === startNode.col) ||
      (temp === finishNode.row && num === finishNode.col)
    ) {
      isStartFinish = true;
      continue;
    }
    tempWalls.push(grid[temp][num]);
  }
  if (!isStartFinish) {
    tempWalls.splice(Math.floor(Math.random() * tempWalls.length), 1);
  }
  for (let wall of tempWalls) {
    walls.push(wall);
  }
}

export function VerticalMaze(grid) {

  walls = buildVerticalMaze(grid, grid[0][0], grid[1][1]);
  return walls;
}