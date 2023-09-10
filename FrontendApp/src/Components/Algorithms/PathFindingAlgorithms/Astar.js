//guaranteed for giving the shortest distance/path

const { ipcRenderer } = window.require("electron");

export function astar(grid, start_node, end_node) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeAStar", grid, start_node, end_node);
    ipcRenderer.on("aStarResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrderASTAR(finishNode) {

  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  
  return nodesInShortestPathOrder;
  //array consisting the nodes for shortest path
}

