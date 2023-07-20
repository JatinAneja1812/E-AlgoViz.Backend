import swap from "./HelperFunctions/Swap";

function heapify(list, n, i, order) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && list[left] > list[largest]) {
    largest = left;
  }

  if (right < n && list[right] > list[largest]) {
    largest = right;
  }

  if (largest !== i) {
    order.push([i, largest, list.slice(), null]);
    swap(i, largest, list);
    heapify(list, n, largest, order);
  }
}

export default function heapSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  const n = dupBlocks.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(dupBlocks, n, i, order);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    order.push([0, i, null, null]);
    swap(0, i, dupBlocks);
    order.push([0, i, dupBlocks.slice(), null]);
    heapify(dupBlocks, i, 0, order);
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
