function sort(arr, low, high, order) {
  if (low < high) {
    // Choose a pivot element
    const pivot = arr[Math.floor((low + high) / 2)];

    // Partition the array
    let i = low;
    let j = high;
    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;

      if (i <= j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Store the step in the order array
        order.push([i, j, arr.slice(), pivot]);

        i++;
        j--;
      }
    }
    // Sort the sub-arrays
    sort(arr, low, j, order);
    sort(arr, i, high, order);
  }
}

export default function cubeSort(arr) {
  const order = [];

  sort(arr, 0, arr.length - 1, order);

  for (let i = 0; i < arr.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
