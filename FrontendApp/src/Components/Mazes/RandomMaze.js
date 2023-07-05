var Walls = [];
// it is a simple function to randomly place walls in a grid
// where every node has a 25% chance of being a wall
function buildRandomMaze(grid, N, M) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      var ok = Math.random() - 0.3;
      if (ok <= 0) {
        Walls.push(grid[i][j]);
      }
    }
  }
  return Walls;
}

export function RandomMaze(grid, N, M) {

  Walls =  buildRandomMaze(grid, N , M);
  return Walls;
}
