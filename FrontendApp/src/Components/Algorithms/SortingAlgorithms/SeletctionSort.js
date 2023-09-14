const { ipcRenderer } = window.require("electron");

export default function selectionSort(blocks) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeSelectionSort", blocks);
    ipcRenderer.on("selectionSortResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}



// import swap from "./HelperFunctions/Swap";

// export default function selectionSort(blocks) {
//     const dupBlocks = blocks.slice();
//     const order = [];
  
//     const n = dupBlocks.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
  
//       for (let j = i + 1; j < n; j++) {
//         order.push([j, minIndex, null, null]);
//         if (dupBlocks[j] < dupBlocks[minIndex]) {
//           minIndex = j;
//         }
//       }
//       order.push([i, minIndex, null, null]);
//       swap(i, minIndex, dupBlocks);
//       order.push([i, minIndex, dupBlocks.slice(), null]);
//     }
  
//     for (let i = 0; i < dupBlocks.length; i++) {
//         order.push([null, null, null, i]);
//     }
//     return order;
//   }