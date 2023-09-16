import { dijkstra, getNodesInShortestPathOrder } from "./DijkstraSearch";
import { astar, getNodesInShortestPathOrderASTAR } from "./Astar";
import { GreedyBFS, getNodesInShortestPathOrderBestFS} from "./GreedyBestFirstSearch";
import { depthFirstSearch, getNodesInShortestPathOrderDFS} from "./DepthFirstSearch";
import { bfs, getNodesInShortestPathOrderBFS } from "./BreadthFirstSearch";
import { bidirectionalBFS, getNodesInShortestPathOrderMBFS } from "./BFSBidirectional"; // for bidirectional BFS
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
  var finishNode;
  //call for switching the path finding algo
  switch (algo_type) {
    case "Dijkstra": {
      try {
        visitedNodesInOrder = await dijkstra(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }
      break;
    }
    case "Breadth-First Search": {
      try {
        visitedNodesInOrder = await bfs(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderBFS(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }
      break;
    }
    case "Greedy B-F Serach": {
      try {
        visitedNodesInOrder = await GreedyBFS(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderBestFS(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }
      break;
    }
    case "BFS-Bidirectional": {
      visitedNodesInOrder = bidirectionalBFS(grid, start_node, end_node);
      nodesInShortestPathOrder = getNodesInShortestPathOrderMBFS();
      break;
    }
    case "A* Search": {
      try {
        visitedNodesInOrder = await astar(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderASTAR(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }

      break;
    }
    case "Depth-First Search": {
      try {
        visitedNodesInOrder = await depthFirstSearch(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }

      // visitedNodesInOrder = depthFirstSearch(grid, start_node, end_node);
      // nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(end_node);
      break;
    }
    case "Swarm Algorithm": {
      try {
        visitedNodesInOrder = await swarmAlgorithm(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderSwarm(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }

      break;
    }
    case "Convergent Swarm": {
      try {
        visitedNodesInOrder = await convergentSwarmAlgorithm(grid, start_node, end_node);
        finishNode =  visitedNodesInOrder.find(node => node.row === end_node.row && node.col === end_node.col);
        nodesInShortestPathOrder = getNodesInShortestPathOrderConvergeSwarm(finishNode);
        finishNode = null;
      } catch (error) {
        // Handle any errors that might occur during the dijkstra function
        console.error(error);
      }

      // visitedNodesInOrder = convergentSwarmAlgorithm(grid, start_node, end_node);
      // nodesInShortestPathOrder = getNodesInShortestPathOrderConvergeSwarm(end_node);
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