const MIN_MERGE = 32;

function insertionSort(arr, start, end, order) {
  for (let i = start + 1; i <= end; i++) {
    const current = arr[i];
    let j = i - 1;

    order.push([i, j, arr.slice()]); // Highlight the current element being compared

    while (j >= start && arr[j] > current) {
      arr[j + 1] = arr[j];
      order.push([j + 1, j, arr.slice()]); // Swap elements in the order array
      j--;
    }

    arr[j + 1] = current;
    order.push([j + 1, i, arr.slice()]); // Update the correct position for the current element
  }
}

function merge(arr, start, mid, end, order) {
  const leftLength = mid - start + 1;
  const rightLength = end - mid;

  const leftArr = new Array(leftLength);
  const rightArr = new Array(rightLength);

  for (let i = 0; i < leftLength; i++) {
    leftArr[i] = arr[start + i];
  }

  for (let i = 0; i < rightLength; i++) {
    rightArr[i] = arr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = start;

  while (i < leftLength && j < rightLength) {
    order.push([k, null, null, k]); // Highlight elements being compared in both subarrays

    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      order.push([k, null, arr[k], null]); // Swap elements in the order array
      i++;
    } else {
      arr[k] = rightArr[j];
      order.push([k, null, arr[k], null]); // Swap elements in the order array
      j++;
    }

    k++;
  }

  while (i < leftLength) {
    arr[k] = leftArr[i];
    order.push([k, null, arr[k], null]); // Swap elements in the order array
    i++;
    k++;
  }

  while (j < rightLength) {
    arr[k] = rightArr[j];
    order.push([k, null, arr[k], null]); // Swap elements in the order array
    j++;
    k++;
  }
}

export default function timSort(arr) {
  const n = arr.length;
  const order = [];

  for (let i = 0; i < n; i += MIN_MERGE) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1), order);
  }

  let size = MIN_MERGE;

  while (size < n) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) {
        merge(arr, left, mid, right, order);
      }
    }

    size *= 2;
  }

  for (let i = 0; i < arr.length; i++) {
    order.push([null, null, null, i]);
  }

  return order;
}
