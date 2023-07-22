import swap from "./HelperFunctions/Swap";

export default function cocktailShakerSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  let start = 0;
  let end = dupBlocks.length - 1;

  while (start <= end) {
    let swapped = false;

    // Forward pass (similar to Bubble Sort)
    for (let i = start; i < end; i++) {
      order.push([i, i + 1, null, null]);
      if (dupBlocks[i] > dupBlocks[i + 1]) {
        swap(i, i + 1, dupBlocks);
        order.push([i, i + 1, dupBlocks.slice(), null]);
        swapped = true;
      }
    }

    if (!swapped) break;

    end--;

    // Backward pass
    for (let i = end; i > start; i--) {
      order.push([i, i - 1, null, null]);
      if (dupBlocks[i] < dupBlocks[i - 1]) {
        swap(i, i - 1, dupBlocks);
        order.push([i, i - 1, dupBlocks.slice(), null]);
        swapped = true;
      }
    }

    start++;
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
