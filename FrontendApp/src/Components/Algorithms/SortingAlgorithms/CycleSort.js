import SortingAlgorithmsEnum from "../../../Enums/VisualizerAlgosEnums/SortingAlgorithmsEnum";

const { ipcRenderer } = window.require("electron");

export default function cycleSort(blocks) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeSort", blocks, SortingAlgorithmsEnum.CYCLE_SORT);
    ipcRenderer.on("sortResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}




