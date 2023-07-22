function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

export default function bogoSort(blocks) {
  const order = [];

  while (!isSorted(blocks)) {
    shuffleArray(blocks);
    order.push([null, null, blocks.slice(), null, null]);
  }

  for (let i = 0; i < blocks.length; i++) {
    order.push([null, null, null, i, null]);
  }

  return order;
}
