
const { ipcRenderer } = window.require("electron");

export default function shellSort(blocks) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("visualizeShellSort", blocks);
    ipcRenderer.on("shellSortResult", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}


// export default function shellSort(blocks) {
//   const dupBlocks = blocks.slice();
//   const order = [];

//   const n = dupBlocks.length;
//   let gap = Math.floor(n / 2);

//   while (gap > 0) {
//     for (let i = gap; i < n; i++) {
//       let temp = dupBlocks[i];
//       let j = i;

//       order.push([j, j - gap, null, null]);
//       while (j >= gap && dupBlocks[j - gap] > temp) {
//         dupBlocks[j] = dupBlocks[j - gap];
//         j -= gap;
//         order.push([j, j - gap, dupBlocks.slice(), null]);
//       }

//       dupBlocks[j] = temp;
//     }

//     gap = Math.floor(gap / 2);
//   }

//   for (let i = 0; i < dupBlocks.length; i++) {
//     order.push([null, null, null, i]);
//   }

//   console.log(order)
//   return order;
// }
