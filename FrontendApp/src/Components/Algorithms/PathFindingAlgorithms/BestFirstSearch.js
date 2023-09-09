
//guaranteed for giving the shortest distance/path

const { ipcRenderer } = window.require("electron");

export function GreedyBFS(grid, start_node, end_node) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeGreedyBFS", grid, start_node, end_node);
    ipcRenderer.on("GreedyBFSResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

// Backtracks from the finishNode to find the shortest path.

export function getNodesInShortestPathOrderBestFS(end_node) {
  const nodesInShortestPathOrder = [];
  let currentNode = end_node;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return nodesInShortestPathOrder;
  //array consisting the nodes leads to the shortest path
}




// export function GreedyBFS(grid, startNode, finishNode) {
//   if (!startNode || !finishNode || startNode === finishNode) {
//     return;
//   }
//   startNode.distance = 0;
//   let visitedNodesInOrder = [];
//   let unvisitedNodes = [];
//   unvisitedNodes.push(startNode);

//   while (unvisitedNodes.length !== 0) {
//     unvisitedNodes.sort((x, y) => x.totalDistance - y.totalDistance);
//     let closestNode = unvisitedNodes.shift();
//     if (closestNode === finishNode) return visitedNodesInOrder;

//     closestNode.isVisited = true;
//     visitedNodesInOrder.push(closestNode);

//     let neighbours = getNeighbours(grid, closestNode);
//     for (let neighbour of neighbours) {
//       let distance = closestNode.distance + 1;

//       if (neighbourNotInUnvisitedNodes(neighbour, unvisitedNodes)) {
//         unvisitedNodes.unshift(neighbour);
//         neighbour.distance = distance;
//         neighbour.totalDistance = euclideanDistance(neighbour, finishNode);
//         neighbour.previousNode = closestNode;
//       } else if (distance < neighbour.distance) {
//         neighbour.distance = distance;
//         neighbour.totalDistance = euclideanDistance(neighbour, finishNode);
//         neighbour.previousNode = closestNode;
//       }
//     }
//   }
//   return visitedNodesInOrder;
// }

// function euclideanDistance(node, finishNode) {
//   let x = Math.abs(finishNode.row - node.row);
//   let y = Math.abs(finishNode.col - node.col);
//   return Math.sqrt(x * x + y * y);
// }

// function getNeighbours(grid, node) {
//   let neighbours = [];
//   let { row, col } = node;
//   if (row !== 0) neighbours.push(grid[row - 1][col]);
//   if (col !== 0) neighbours.push(grid[row][col - 1]);
//   if (row !== grid.length - 1) neighbours.push(grid[row + 1][col]);
//   if (col !== grid[0].length - 1) neighbours.push(grid[row][col + 1]);

//   return neighbours.filter(
//     (neighbour) => !neighbour.isWall && !neighbour.isVisited
//   );
// }

// function neighbourNotInUnvisitedNodes(neighbour, unvisitedNodes) {
//   for (let node of unvisitedNodes) {
//     if (node.row === neighbour.row && node.col === neighbour.col) {
//       return false;
//     }
//   }
//   return true;
// }
// // Backtracks from the finishNode to find the shortest path.
 
// export function getNodesInShortestPathOrderBestFS(end_node) {
//   const nodesInShortestPathOrder = [];
//   let currentNode = end_node;
//   while (currentNode !== null) {
//     nodesInShortestPathOrder.unshift(currentNode);
//     currentNode = currentNode.previousNode;
//   }

//   return nodesInShortestPathOrder;
//   //array consisting the nodes leads to the shortest path
// }
