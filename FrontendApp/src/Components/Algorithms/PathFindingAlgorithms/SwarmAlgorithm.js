const { ipcRenderer } = window.require("electron");

export function swarmAlgorithm(grid, start_node, end_node) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeSwarmSearch", grid, start_node, end_node);
    ipcRenderer.on("swarmSearchResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrderSwarm(finishNode) {

  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
  //array consisting the nodes for shortest path
}



// Define the Swarm Algorithm function

// export function swarmAlgorithm(grid, startNode, endNode) {

//   // Create a priority queue for node exploration
//   const priorityQueue = [];

//   // Add the start node to the priority queue
//   priorityQueue.push(startNode);
//   startNode.isVisited = true;

//   // Array to store visited nodes in order
//   const visitedNodesInOrder = [];

//   // Perform node exploration until the priority queue is empty
//   while (priorityQueue.length > 0) {
//     // Sort the priority queue based on the sum of distance and heuristic
//     priorityQueue.sort((a, b) => a.distance + a.heuristic - (b.distance + b.heuristic));

//     // Dequeue the node with the minimum sum of distance and heuristic
//     const currentNode = priorityQueue.shift();

//     // Check if the current node is the destination
//     if (currentNode === endNode) {
//       // Path found! Return the visited nodes in order
//       return visitedNodesInOrder;
//     }

//     // Mark the current node as visited
//     currentNode.isVisited = true;

//     // Get the neighbors of the current node
//     const neighbors = getNeighbors(currentNode, grid);

//     // Iterate through the neighbors
//     for (const neighbor of neighbors) {
//       // Check if the neighbor is a valid, unvisited node
//       if (!neighbor.isVisited && !neighbor.isWall && !neighbor.isWeight) {
//         // Mark the neighbor as visited and update its previous node
//         neighbor.isVisited = true;
//         neighbor.previousNode = currentNode;

//         // Calculate the distance from the start node to the neighbor
//         neighbor.distance = currentNode.distance + 1;

//         // Calculate the heuristic (Manhattan distance) from the neighbor to the end node
//         const neighborHeuristic = calculateHeuristic(neighbor, endNode);

//         // Calculate the weighted heuristic to prioritize the shortest path
//         const weightedHeuristic = neighbor.distance * 2 + neighborHeuristic * 0.8;

//         // Add the neighbor to the priority queue for further exploration
//         priorityQueue.push(neighbor);

//         // Update the neighbor's heuristic with the weighted heuristic
//         neighbor.heuristic = weightedHeuristic;

//         // Add the neighbor to the visited nodes array
//         visitedNodesInOrder.push(neighbor);
//       }
//     }
//     // Add the current node to the visited nodes array
//     visitedNodesInOrder.push(currentNode);
//   }
//   // No path found
//   return visitedNodesInOrder;
// }


// // Helper function to get the valid neighbors of a node
// function getNeighbors(node, grid) {
//   const neighbors = [];
//   const { row, col } = node;

//   // Define the possible neighbor offsets
//   const offsets = [
//     { row: -1, col: 0 }, // Top
//     { row: 1, col: 0 }, // Bottom
//     { row: 0, col: -1 }, // Left
//     { row: 0, col: 1 } // Right
//   ];

//   // Iterate through the possible offsets
//   for (const offset of offsets) {
//     const newRow = row + offset.row;
//     const newCol = col + offset.col;

//     // Check if the new row and column are within the grid boundaries
//     if (isValidNode(newRow, newCol, grid.length, grid[0].length)) {
//       const neighbor = grid[newRow][newCol];

//       // Add the neighbor to the list of valid neighbors
//       neighbors.push(neighbor);
//     }
//   }

//   return neighbors;
// }

// // Helper function to check if a node is within the grid boundaries
// function isValidNode(row, col, numRows, numCols) {
//   return row >= 0 && row < numRows && col >= 0 && col < numCols;
// }

// // Helper function to calculate the Manhattan distance between two nodes
// function calculateHeuristic(nodeA, nodeB) {
//   const dx = Math.abs(nodeA.col - nodeB.col);
//   const dy = Math.abs(nodeA.row - nodeB.row);
//   return dx + dy;
// }

// // Backtracks from the finishNode to find the shortest path.
// export function getNodesInShortestPathOrderSwarm(finishNode) {
//   const nodesInShortestPathOrder = [];
//   let currentNode = finishNode;
//   while (currentNode !== null) {
//     nodesInShortestPathOrder.unshift(currentNode);
//     currentNode = currentNode.previousNode;
//   }
//   return nodesInShortestPathOrder;
// }