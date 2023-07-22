function countingSort(arr, exp, order) {
  const n = arr.length;
  const output = Array(n).fill(0);
  const count = Array(10).fill(0);

  // Count occurrences of digits at the specified exponent
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // Calculate cumulative count
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array in sorted order
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Update the original array with the sorted values
  for (let i = 0; i < n; i++) {
    order.push([i, null, null, null]);
    arr[i] = output[i];
    order.push([i, null, arr.slice(), null]);
  }
}

export default function radixSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  const maxNum = Math.max(...dupBlocks);

  // Perform counting sort for each digit (exp) from the least significant to the most significant
  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    countingSort(dupBlocks, exp, order);
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
