const { ipcRenderer } = window.require("electron");

export function dijkstra(grid, start_node, end_node) {
  console.log("reached inside api call")
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeDijkstra", grid, start_node, end_node);
    ipcRenderer.on("dijkstraResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrder(finishNode) {

  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  
  return nodesInShortestPathOrder;
}
