export default function cycleSort(blocks) {
  const n = blocks.length;
  const order = [];

  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = blocks[cycleStart];
    let pos = cycleStart;

    for (let i = cycleStart + 1; i < n; i++) {
      order.push([i, null, null, null]); // Highlight the current element being compared
      if (blocks[i] < item) {
        pos++;
      }
    }

    if (pos === cycleStart) {
      order.push([null, null, blocks.slice(), null]); // No rotation needed
      continue;
    }

    while (item === blocks[pos]) {
      pos++;
    }

    if (pos !== cycleStart) {
      order.push([cycleStart, pos, blocks.slice(), null]); // Swap elements in the order array
      let temp = item;
      item = blocks[pos];
      blocks[pos] = temp;
      order.push([cycleStart, pos, blocks.slice(), null]);
    }

    while (pos !== cycleStart) {
      pos = cycleStart;

      for (let i = cycleStart + 1; i < n; i++) {
        order.push([i, null, null, null]); // Highlight the current element being compared
        if (blocks[i] < item) {
          pos++;
        }
      }

      while (item === blocks[pos]) {
        pos++;
      }

      if (item !== blocks[pos]) {
        order.push([cycleStart, pos, blocks.slice(), null]); // Swap elements in the order array
        let temp = item;
        item = blocks[pos];
        blocks[pos] = temp;
        order.push([cycleStart, pos, blocks.slice(), null]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    order.push([null, null, null, i]); // Mark the element as sorted
  }

  return order;
}
