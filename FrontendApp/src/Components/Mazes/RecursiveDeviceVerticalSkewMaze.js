var Walls = [];
function buildRecursiveDivision(grid, start_row, end_row, start_col, end_col) {
  //var cut = Math.floor(Math.random() * 2);
  var cut = end_row - start_row <= end_col - start_col ? 1 : 0;

  if (end_row - start_row < 2 && end_col - start_col < 2) return;

  // it is a horizontal cut
  if (cut === 0) {
    horizontal(grid, start_row, end_row, start_col, end_col, cut);
  } // it is a vertical cut
  else {
    vertical(grid, start_row, end_row, start_col, end_col, cut);
  }
}

function horizontal(grid, start_row, end_row, start_col, end_col, cut) {
  var horiDraw= [];
  for (let i = start_row + 5; i <= end_row - 5; i += 2) {
    horiDraw.push(i);
  }
  shuffle(horiDraw);
  if (horiDraw.length === 0) return;
  var rowId = horiDraw[0];
  horiDraw = [];
  for (let i = start_col; i <= end_col; i += 2) {
    horiDraw.push(i);
  }
  shuffle(horiDraw);
  if (horiDraw.length === 0) return;
  var freePos = horiDraw[0];
  add_to_pic(grid, start_row, end_row, start_col, end_col, cut, rowId, freePos);
  buildRecursiveDivision(grid, start_row, rowId - 2, start_col, end_col);
  buildRecursiveDivision(grid, rowId + 2, end_row, start_col, end_col);
}

function vertical(grid, start_row, end_row, start_col, end_col, cut) {
  var verticaldraw = [];
  for (let i = start_col + 4; i <= end_col - 4; i += 1) {
    verticaldraw.push(i);
  }
  shuffle(verticaldraw);
  if (verticaldraw.length === 0) return;
  var colId = verticaldraw[0];
  verticaldraw = [];
  for (let i = start_col; i <= end_col; i += 2) {
    verticaldraw.push(i);
  }
  shuffle(verticaldraw);
  if (verticaldraw.length === 0) return;
  var freePos = verticaldraw[0];
  add_to_pic(grid, start_row, end_row, start_col, end_col, cut, colId, freePos);
  buildRecursiveDivision(grid, start_row, end_row, start_col, colId );
  buildRecursiveDivision(grid, start_row, end_row, colId , end_col);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.4);
}

function add_to_pic(
  grid,
  start_row,
  end_row,
  start_col,
  end_col,
  cut,
  id,
  skip
) {
  if (cut === 0) {
    for (let i = start_col; i <= end_col; i++) {
      if (skip === i) continue;
      grid[id][i].isWall = true;
      Walls.push(grid[id][i]);
    }
  } else {
    for (let i = start_row; i <= end_row; i++) {
      if (skip === i) continue;
      grid[i][id].isWall = true;
      Walls.push(grid[i][id]);
    }
  }
}

export function RecursiveDivision(
  grid,
  start_row,
  end_row,
  start_col,
  end_col
) {
  Walls = [];
  for (let i = start_col; i <= end_col; i++) {
    grid[start_row][i].isWall = grid[end_row][i].isWall = true;
    Walls.push(grid[start_row][i]);
    Walls.push(grid[end_row][i]);
  }
  for (let i = start_row; i <= end_row; i++) {
    grid[i][start_col].isWall = grid[i][end_col].isWall = true;
    Walls.push(grid[i][start_col]);
    Walls.push(grid[i][end_col]);
  }

  buildRecursiveDivision(
    grid,
    start_row + 1,
    end_row - 1,
    start_col + 1,
    end_col - 1
  );
  return Walls;
}

/*
Make the dimensions odd,
choose even places to draw walls, 
choose odd places to make openings
apply recursive division to solve the problem
*/
