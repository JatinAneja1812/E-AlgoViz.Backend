import swap from "./HelperFunctions/Swap";

export default function oddEvenSort(blocks) {
    const dupBlocks = blocks.slice();
    const order = [];
  
    const n = dupBlocks.length;
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
  
      // Odd phase (compare and swap odd-indexed elements)
      for (let i = 1; i < n - 1; i += 2) {
        order.push([i, i + 1, null, null]);
        if (dupBlocks[i] > dupBlocks[i + 1]) {
          swap(i, i + 1, dupBlocks);
          order.push([i, i + 1, dupBlocks.slice(), null]);
          sorted = false;
        }
      }
  
      // Even phase (compare and swap even-indexed elements)
      for (let i = 0; i < n - 1; i += 2) {
        order.push([i, i + 1, null, null]);
        if (dupBlocks[i] > dupBlocks[i + 1]) {
          swap(i, i + 1, dupBlocks);
          order.push([i, i + 1, dupBlocks.slice(), null]);
          sorted = false;
        }
      }
    }
  
    for (let i = 0; i < dupBlocks.length; i++) {
      order.push([null, null, null, i]);
    }
    return order;
  }