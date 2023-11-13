// import * as constants from "../PVisualizer/PVisualContants";
import { RecursiveBacktracker } from "./RecursiveBacktracker";
import { RecursiveDivision } from "./RecursiveDivision";
import { RandomMaze } from "./RandomMaze";
import { VerticalMaze } from "./VerticalMaze";
import { HorizontalMaze } from "./HorizontalMaze";
import { staircaseMaze } from "./SimpleStairMaze";
import { Prim } from "./PrimMaze";
import { spiral } from "./SpiralMaze";

function get_paths(state_grid, N, M, maze_type) {
  var grid = JSON.parse(JSON.stringify(state_grid));
  var Walls = [];

  switch (maze_type) {
    case "Resursive Backtracking": {
      Walls = RecursiveBacktracker(grid);
      break;
    }
    case "Recursive Division": {
      Walls = RecursiveDivision(grid, 0, N - 1, 0, M - 1);
      break;
    }
    case "Basic Random maze": {
      Walls = RandomMaze(grid, N, M);
      break;
    }
    case "Vertical Maze": {
      Walls = VerticalMaze(grid);
      break;
    }
    case "Horizontal Maze": {
      Walls = HorizontalMaze(grid);
      break;
    }
    case "Simple stair": {
      Walls = staircaseMaze(grid, N);
      break;
    }
    case "Prim Maze": {
      Walls = Prim(grid);
      break;
    }
    case "Spiral Maze": {
      Walls = spiral(grid);
      break;
    }
    default:
      break;
  }
  return Walls;
}

export function solve_maze(state_grid, N, M, maze_type) {
  return get_paths(state_grid, N, M, maze_type);
}
