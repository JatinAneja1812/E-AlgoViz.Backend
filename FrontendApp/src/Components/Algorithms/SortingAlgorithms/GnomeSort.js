import SortingAlgorithmsEnum from "../../../Enums/VisualizerAlgosEnums/SortingAlgorithmsEnum";

const { ipcRenderer } = window.require("electron");

export default function gnomeSort(blocks) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeSort", blocks, SortingAlgorithmsEnum.GNOME_SORT);
    ipcRenderer.on("sortResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

