var Walls = [];

function buildRecursiveBacktracker(grid, row, col) {
  const node = grid[row][col];
  Walls.push(node);
  node.isVisited = true;
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  shuffle(unvisitedNeighbors);
  for (const neighborNode of unvisitedNeighbors) {
    if (neighborNode.isVisited === false) {
      Walls.push(
        grid[(node.row + neighborNode.row) / 2][(node.col + neighborNode.col) / 2]
      );
      buildRecursiveBacktracker(grid, neighborNode.row, neighborNode.col);
    }
  }

  return Walls;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;

  if (row > 1) neighbors.push(grid[row - 2][col]);
  if (row < grid.length - 2) neighbors.push(grid[row + 2][col]);
  if (col > 1) neighbors.push(grid[row][col - 2]);
  if (col < grid[0].length - 2) neighbors.push(grid[row][col + 2]);

  //We are only concerned about the unvisited neighbors
  return neighbors.filter((node) => !node.isVisited);
}

export function RecursiveBacktracker(grid) {
  Walls = buildRecursiveBacktracker(grid, 1, 1);
  return Walls;
}

/*
logic
  1. start with a grid full of walls
  2. start with any node, say 1, 1
  3. look at its possible neighbors, that have not been visited yet.
    by neighbors we mean, those nodes at a distance of 2 from the current node
  4. randomly choose one neighbor, repeat steps 1-3 for this new node, until all nodes are visited
*/
