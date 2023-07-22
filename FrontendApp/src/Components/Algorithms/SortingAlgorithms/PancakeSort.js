function swap(arr, i, j) {
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

function findMaxIndex(arr, n) {
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

export default function pancakeSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  let n = dupBlocks.length;

  while (n > 1) {
    // Find the index of the maximum element in the first n elements
    const maxIndex = findMaxIndex(dupBlocks, n);

    if (maxIndex !== n - 1) {
      // Flip the array up to the maximum element (bringing it to the first position)
      order.push([0, maxIndex, null, null]);
      swap(dupBlocks, 0, maxIndex);
      order.push([0, maxIndex, dupBlocks.slice(), null]);

      // Flip the entire array (bringing the maximum element to the correct position)
      order.push([0, n - 1, null, null]);
      swap(dupBlocks, 0, n - 1);
      order.push([0, n - 1, dupBlocks.slice(), null]);
    }

    // Reduce the size of the unsorted array
    n--;
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
