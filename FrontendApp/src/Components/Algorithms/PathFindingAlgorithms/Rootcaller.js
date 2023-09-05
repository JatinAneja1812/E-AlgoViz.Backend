import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";

import { solve_bfs, getNodesInShortestPathOrderBFS } from "./BFS2";

import { solve_mbfs, getNodesInShortestPathOrderMBFS } from "./BFSmultiple"; // for bidirectional BFS

import { solve_astar, getNodesInShortestPathOrderASTAR } from "./Astar";
import {
  GreedyBFS,
  getNodesInShortestPathOrderBestFS,
} from "./BestFirstSearch";

import {depthFirstSearch, getNodesInShortestPathOrderDFS} from "./DepthFirstSearch";
import { swarmAlgorithm, getNodesInShortestPathOrderSwarm } from "./SwarmAlgorithm";
import { convergentSwarmAlgorithm, getNodesInShortestPathOrderConvergeSwarm } from "./ConvergentSwarm";

async function get_paths(
  state_grid,
  start_row,
  start_col,
  end_row,
  end_col,
  algo_type
) {
  var grid = JSON.parse(JSON.stringify(state_grid));
  var start_node = grid[start_row][start_col];
  var end_node = grid[end_row][end_col];
  var visitedNodesInOrder = [];
  var nodesInShortestPathOrder = [];

  //call for switching the path finding algo
  switch (algo_type) {
    case "Dijkstra": {
      try {
        visitedNodesInOrder = await dijkstra(grid, start_node, end_node);
        var endNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
        // Continue with the code that depends on visitedNodesInOrder and nodesInShortestPathOrder
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }
      break;
    }

    case "Breadth-First Search": {
      visitedNodesInOrder = solve_bfs(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderBFS(end_node);
      break;
    }
    case "Greedy B-F Serach": {
      visitedNodesInOrder = GreedyBFS(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderBestFS(end_node);
      break;
    }
    case "BFS-Bidirectional": {
      visitedNodesInOrder = solve_mbfs(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderMBFS();
      break;
    }
    case "A* Search": {
      visitedNodesInOrder = solve_astar(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderASTAR(end_node);
      break;
    }
    case "Depth-First Search": {
      visitedNodesInOrder = depthFirstSearch(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(end_node);
      break;
    }
    case "Swarm Algorithm": {
      visitedNodesInOrder = swarmAlgorithm(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderSwarm(end_node);
      break;
    }
    case "Convergent Swarm": {
      visitedNodesInOrder = convergentSwarmAlgorithm(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderConvergeSwarm(end_node);
      break;
    }
    default:
      break;
  }

  return [visitedNodesInOrder, nodesInShortestPathOrder];
  //return the path both the visited node as well as the shortest one
}

async function middle_case(
  state_grid,
  start_row,
  start_col,
  end_row,
  end_col,
  mid_row,
  mid_col,
  algo_type
) {
  var visitedNodesInOrder = [];
  var visitedNodesInOrder2 = [];
  var nodesInShortestPathOrder = [];
  var nodesInShortestPathOrder2 = [];
  var ret;

  ret = await get_paths(
    state_grid,
    start_row,
    start_col,
    mid_row,
    mid_col,
    algo_type
  );
  visitedNodesInOrder = ret[0];
  nodesInShortestPathOrder = ret[1];

  ret = await get_paths(state_grid, mid_row, mid_col, end_row, end_col, algo_type);
  visitedNodesInOrder2 = ret[0];
  nodesInShortestPathOrder2 = ret[1];

  for (let i in visitedNodesInOrder2) {
    visitedNodesInOrder.push(visitedNodesInOrder2[i]);
  }
  for (let i in nodesInShortestPathOrder2) {
    nodesInShortestPathOrder.push(nodesInShortestPathOrder2[i]);
  }

  return [visitedNodesInOrder, nodesInShortestPathOrder];
}

export async function solve_algorithm(
  state_grid,
  start_row,
  start_col,
  end_row,
  end_col,
  mid_row,
  mid_col,
  algo_type
) {
  if (mid_row === -1) {
    return await get_paths(
      state_grid,
      start_row,
      start_col,
      end_row,
      end_col,
      algo_type
    );
  } else {
    return await middle_case(
      state_grid,
      start_row,
      start_col,
      end_row,
      end_col,
      mid_row,
      mid_col,
      algo_type
    );
  }
}