
export default function shellSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  const n = dupBlocks.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = dupBlocks[i];
      let j = i;

      order.push([j, j - gap, null, null]);
      while (j >= gap && dupBlocks[j - gap] > temp) {
        dupBlocks[j] = dupBlocks[j - gap];
        j -= gap;
        order.push([j, j - gap, dupBlocks.slice(), null]);
      }

      dupBlocks[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
