import PathfindingAlgorithmsEnum from "../../../Enums/VisualizerAlgosEnums/PathfindingAlgorithmsEnum";

const { ipcRenderer } = window.require("electron");

export function convergentSwarmAlgorithm(grid, start_node, end_node) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeShortestPath", grid, start_node, end_node, PathfindingAlgorithmsEnum.CONVERGENT_SWARM);
    ipcRenderer.on("pathfindingAlgoResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrderConvergeSwarm(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

