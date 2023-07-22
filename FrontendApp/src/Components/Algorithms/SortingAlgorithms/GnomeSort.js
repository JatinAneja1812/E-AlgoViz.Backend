import swap from "./HelperFunctions/Swap";

export default function gnomeSort(blocks) {
  const dupBlocks = blocks.slice();
  const order = [];

  let index = 0;

  while (index < dupBlocks.length) {
    if (index === 0 || dupBlocks[index] >= dupBlocks[index - 1]) {
      order.push([index, index - 1, null, null]);
      index++;
    } else {
      order.push([index, index - 1, null, null]);
      swap(index, index - 1, dupBlocks);
      order.push([index, index - 1, dupBlocks.slice(), null]);
      index--;
    }
  }

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  return order;
}
