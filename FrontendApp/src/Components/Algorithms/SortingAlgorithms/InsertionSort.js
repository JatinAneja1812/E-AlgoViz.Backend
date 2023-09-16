import SortingAlgorithmsEnum from "../../../Enums/VisualizerAlgosEnums/SortingAlgorithmsEnum";

const { ipcRenderer } = window.require("electron");

export default function insertionSort(blocks) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeSort", blocks, SortingAlgorithmsEnum.INSERTION_SORT);
    ipcRenderer.on("sortResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      console.log(parsedResult)
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

 